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

// GET single course by slug
router.get('/:slug', async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch course', details: err });
  }
});

module.exports = router;
