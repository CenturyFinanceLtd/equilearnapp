const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const ReviewSchema = new mongoose.Schema({
  studentName: String,
  designation: String,
  stars: Number,
  comment: String,
});

const CourseSchema = new mongoose.Schema({
  courseName: String,
  coursePrice: String,
  courseDuration: String,
  skillLevel: String,
  emis: String,
  subDescription: String,
  programOverview: String,
  skillsAcquired: String,
  whatYouLearn: [String],
  modules: [ModuleSchema],
  youtubeId: String,
  youtubeThumbnail: String,
  coursePageImage: String,
  coursesPageImage: String,
  reviews: [ReviewSchema],
});

module.exports = mongoose.model("Course", CourseSchema);
