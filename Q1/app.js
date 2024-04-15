// app.js

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to serve static files (e.g., CSS, images)
app.use(express.static('public'));

// Route to serve all data as JSON
app.get('/alldata', (req, res) => {
    fs.readFile('country.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading data');
            return;
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

// Route to render data in HTML format using EJS template
app.get('/viewdata', (req, res) => {
    fs.readFile('country.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading data');
            return;
        }
        const jsonData = JSON.parse(data);
        res.render('index', { countries: jsonData });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


