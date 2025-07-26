require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const CreatorSchema = new mongoose.Schema({
  name: String,
  category: String,
  followers: String,
  bio: String,
  image: String,
  social: {
    instagram: String,
    youtube: String
  }
});

const Creator = mongoose.model('Creator', CreatorSchema);

app.get('/creators', async (req, res) => {
  try {
    const creators = await Creator.find();
    res.json(creators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
