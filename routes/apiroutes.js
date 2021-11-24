// app.get (to get notes from db), app.post (to add notes to db, use fs to push to local html), app.delete (to remove notes from db, use fs to delete from index)
// build out funcitons in store.js file and reference in API routes below

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const router = require('express').Router();


// Get existing notes from database
router.get('/notes', (req, res) => {
    let notes = fs.readFileSync('./db/db.json', 'utf-8');
    notes = JSON.parse(notes);
    res.json(notes);
});

// Post new notes to database
router.post('/notes', (req, res) => {
    console.log()
});

// Delete notes within database by id
router.delete('notes/:id', (req, res) => {
    console.log()
});

module.exports = router