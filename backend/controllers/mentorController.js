const Mentor = require('../models/mentor');

//CREATE Mentor 
exports.createMentor = async (req ,res) => {
    try {
        const Mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).json(mentor);
    } catch(error) {
        res.status(400).json({error:error.message });
    }

};
//Get all Mentors
exports.getMentors = async(req, res) =>{
    try {
        const Mentors=await Mentor.find();
        res.status(200).json(mentor);
    }catch(error) {
        res.status(500).json({error: error.message });
    }
};

// Update Mentors
exports.updateMentor = async(req, res) =>{
  try {
    const Mentors = await Mentor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(mentor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Mentors
exports.deleteMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndDelete(req.params.id);
    res.json({ message: "Mentor deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};