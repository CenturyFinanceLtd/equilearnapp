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
  slug: { type: String, unique: true },
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

CourseSchema.pre('save', function (next) {
  if (this.courseName && !this.slug) {
    this.slug = this.courseName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

module.exports = mongoose.model("Course", CourseSchema);
