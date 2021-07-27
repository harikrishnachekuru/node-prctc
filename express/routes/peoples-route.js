// People routes -> used for all common method functionality all the methods placed here and be used as routed to main usage.

const express = require('express');

const router = express.Router()

const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePeople,
    deletePeople
} = require('../controllers/people')

// router.get('/', getPeople)

// router.post('/', createPerson)

// //For checking in the postman 

// router.post('/postman', createPersonPostman)

// router.put('/:id', updatePeople)

// router.delete('/:id', deletePeople)

// We can also align these aand use a single line of code 

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePeople).delete(deletePeople);


module.exports = router;