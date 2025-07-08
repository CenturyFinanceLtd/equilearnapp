const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

router.post("/add", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ message: "Course added successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save course", details: err });
  }
});

module.exports = router;
