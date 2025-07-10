const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Utility to generate a slug from a course name
const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");


// GET all courses
router.get("/", async (req, res) => {
     try {
    const courses = await Course.find();
    const withSlugs = await Promise.all(
      courses.map(async (c) => {
        const obj = c.toObject();
        if (!obj.slug && obj.courseName) {
          obj.slug = slugify(obj.courseName);
          // persist the slug for future requests
          try {
            c.slug = obj.slug;
            await c.save();
          } catch (e) {
            console.error("Failed to persist slug", e);
          }
        }
        return obj;
      })
    );
    res.json(withSlugs);
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

// GET single course by slug
router.get('/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    let course = await Course.findOne({ slug });
    // Fallback: compute slug from name for legacy records
    if (!course) {
      const all = await Course.find();
      course = all.find((c) => slugify(c.courseName || '') === slug);
      if (course && !course.slug) {
        course.slug = slug;
        await course.save().catch((e) => {
          console.error('Failed to persist slug', e);
        });
      }
    }

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
