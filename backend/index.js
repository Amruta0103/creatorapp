const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schema
const creatorSchema = new mongoose.Schema({
  name: String,
  category: String,
  followers: String,
  bio: String,
  image: String,
  social: {
    instagram: String,
    youtube: String,
  },
});
const Creator = mongoose.model("Creator", creatorSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Creator API is running");
});

app.get("/creators", async (req, res) => {
  try {
    const creators = await Creator.find();
    res.json(creators);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
