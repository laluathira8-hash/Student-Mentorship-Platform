const express = require('express');
const router = express.Router();

const{
    createMentor,
    getMentors,
    updateMentor,
    deleteMentor
} = require('../controllers/mentorController');

//Create mentor
router.post('/' , createMentor);

//Get ALL MENTORS 
router.get('/', getMentors);

//Update ALL MENTORS
router.put('/:id', updateMentor);

//Delete ALL MENTORS
router.delete('/:id', deleteMentor);

module.exports = router;