// app.get (to get notes from db), app.post (to add notes to db, use fs to push to local html), app.delete (to remove notes from db, use fs to delete from index)
// build out funcitons in store.js file and reference in API routes below

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/api', (req, res) => {
    console.log()
});

app.post('api/save', (req, res) => {
    console.log()
});

app.delete('api/delete', (req, res) => {
    console.log()
});