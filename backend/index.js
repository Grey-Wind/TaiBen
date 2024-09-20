require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 连接数据库
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// 定义小说和推特内容的 Schema
const contentSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String, // 存储内容链接或文本
});
contentSchema.index({ title: 'text', author: 'text' });

// 创建两个模型，分别指向不同的集合
const Novel = mongoose.model('Novel', contentSchema, 'novels'); // 指定 collection 为 novels
const TwitterPost = mongoose.model('TwitterPost', contentSchema, 'tweets'); // 指定 collection 为 tweets

app.get('/search', async (req, res) => {
  const { query, source } = req.query;

  res.writeHead(200, {
    'access-control-allow-credentials': true,
    'access-control-allow-origin': 'http://localhost:8080',
  })

  try {
    let results;

    if (source === 'twitter') {
      results = await TwitterPost.find({ $text: { $search: query } });
    } else {
      results = await Novel.find({ $text: { $search: query } });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 5000;
console.log(`Database url: ` + process.env.MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
