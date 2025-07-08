const express = require("express");
const router = express.Router();
const Course = require("../models/Course");


// GET all courses
router.get("/", async (req, res) => {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch courses", details: err });
    }
  });
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
