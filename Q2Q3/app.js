const express = require('express');
const fs = require('fs');
const hbs = require('hbs'); // Import Handlebars
const app = express();
const PORT = 3000;

// Set Handlebars as the template engine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // Set views directory

// Middleware to serve static files (e.g., CSS, images)
app.use(express.static('public'));

 // Define a route to render the homepage.hbs template
app.get('/', (req, res) => {
    // Pass data to the template
    res.render('indexv2.hbs', { 
        data: { 
           // name: 'WEB 700 Final Project by Olugbenga Akinyomi and Alvic Panganiban' 
        },
        layout: false 
    });
});


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

// Route to render data in HTML format using Handlebars (hbs) template
app.get('/viewdata', (req, res) => {
    fs.readFile('country.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading data');
            return;
        }
        let jsonData = JSON.parse(data);
       
        jsonData = jsonData.country.map(item => ({
            name: item.name,
            //population: item.population,
            capital: item["@capital"], 
            memberships: item["@memberships"], 
            gdp_total: item.gdp_total,
            inflation: item.inflation,
            unemployment: item.unemployment,
            government: item.government
        }));
        res.render('index', { countries: jsonData });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
