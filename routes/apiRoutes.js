const router = require('express').Router();
const store = require('../db/store');

// Create a route that respondes with all notes coming from the database

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes)
    }) 
    .catch((err) => res.status(500).json(err))
})


// router.post('/notes', (req, res) => {
//     store.addNote(req.body)
//     .then((note) => {
//         return res.json(note)
//     }) 
//     .catch((err) => res.status(500).json(err))
// })


// router.delete('/notes/:id', (req, res) => {
//     store.deleteNote(req.params.id)
//     .then(() => {
//          res.json({ ok: true })
//     }) 
//     .catch((err) => res.status(500).json(err))
// })

   

//Get - provide us with info

//Post - Sending info to the database 
    // posting a note

//Update - editing something already in the db

//Delete - deleting something from the db



module.exports = router;