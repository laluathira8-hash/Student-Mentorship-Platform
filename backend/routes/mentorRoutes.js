const express = require("express");
const router = express.Router();

const {
  createMentor,
  getMentors,
  updateMentor,
  deleteMentor,
} = require("../controllers/mentorController");

router.post("/", createMentor);
router.get("/", getMentors);
router.put("/:id", updateMentor);
router.delete("/:id", deleteMentor);

module.exports = router;