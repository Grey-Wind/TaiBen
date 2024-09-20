require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS 配置
const allowedOrigins = [
  'https://taiben.qingyi-studio.top',
  'http://localhost:8080',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('不允许的来源'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// 连接数据库
mongoose.connect(process.env.MONGO_URI, {
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
      results = await Tweet.find({ title: new RegExp(query, 'i') }, 'title author content tags');
    } else {
      results = await Novel.find({ title: new RegExp(query, 'i') }, 'title author content tags');
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: '搜索失败' });
  }
});

// NovelDetail接口
app.get('/novel-detail/:id', async (req, res) => {
  try {
    const novel = await Novel.findById(req.params.id, 'title author content tags');
    if (!novel) {
      return res.status(404).send('未找到该小说');
    }
    res.json(novel);
  } catch (error) {
    res.status(500).send('服务器错误');
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动，端口: ${PORT}`);
});
