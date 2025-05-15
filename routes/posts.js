const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/add", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json({ message: "Post created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while saving post." });
  }
});

module.exports = router;
