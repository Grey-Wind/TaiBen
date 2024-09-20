require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// 中间件
app.use(cors());
app.use(express.json());

// 连接数据库
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 定义数据模型
const NovelSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  tags: [String],
});

const TweetSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  tags: [String],
});

const Novel = mongoose.model('Novel', NovelSchema);
const Tweet = mongoose.model('Tweet', TweetSchema);

// 搜索接口
app.get('/search', async (req, res) => {
  const { query, source } = req.query;

  try {
    let results;

    if (source === 'twitter') {
      results = await Tweet.find({ title: new RegExp(query, 'i') });
    } else {
      results = await Novel.find({ title: new RegExp(query, 'i') });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: '搜索失败' });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动，端口: ${PORT}`);
});
