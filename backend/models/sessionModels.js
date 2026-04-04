const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor",
  },
  date: String,
  time: String,
  topic: String,
});

module.exports = mongoose.model("Session", sessionSchema);