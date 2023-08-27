const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');


// GET route for retrieving all notes
tips.get('/', (req, res) => {
    readFromFile('./db').then((data) => res.json(JSON.parse(data)));
});

// POST Route for new notes
tips.post('/', (req, res) => {
    console.log(req.body);

    const { title, text, } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            tip_id: uuidv4(),
        };

        readAndAppend(newNote, './db');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;