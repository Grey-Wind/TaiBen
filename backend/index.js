require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const novelSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String, // 存储小说内容文件链接
});

novelSchema.index({ title: 'text', author: 'text' });
const Novel = mongoose.model('Novel', novelSchema);

app.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Novel.find({ $text: { $search: query } });
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
