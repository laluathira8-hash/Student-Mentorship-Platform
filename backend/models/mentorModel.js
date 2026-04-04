const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  availability: String,
});

module.exports = mongoose.model("Mentor", mentorSchema);