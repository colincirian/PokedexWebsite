const express = require("express");
const Sets = express.Router();

// INDEX
Sets.get('/sets', (req, res) => {
    res.send('Get all sets')
})

// SHOW
Sets.get('/:id', (req, res) => {
    const setID = req.params.id;
    res.send(`Get set with ID ${setId}`);
})

// GET
Sets.get()


//EXPORT
module.exports = Sets;