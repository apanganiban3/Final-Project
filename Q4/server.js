// server.js

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Sample data for countries 

const countries = [
    {
        "id": 1,
        "name": "USA",
        "population": 331002651,
        "GDP": 21427000,
        "GDP_unit": "billion",
        "land_area": 9147420,
        "land_area_unit": "km²"
      },
      {
        "id": 2,
        "name": "Canada",
        "population": 38005238,
        "GDP": 1750000,
        "GDP_unit": "billion",
        "land_area": 9093510,
        "land_area_unit": "km²"
      },
      {
        "id": 3,
        "name": "United Kingdom",
        "population": 67886011,
        "GDP": 2827000,
        "GDP_unit": "billion",
        "land_area": 243610,
        "land_area_unit": "km²"
      },
      {
        "id": 4,
        "name": "Germany",
        "population": 83783942,
        "GDP": 3846000,
        "GDP_unit": "billion",
        "land_area": 348560,
        "land_area_unit": "km²"
      },
      {
        "id": 5,
        "name": "France",
        "population": 65273511,
        "GDP": 2582500,
        "GDP_unit": "billion",
        "land_area": 551695,
        "land_area_unit": "km²"
      },
      {
        "id": 6,
        "name": "Russia",
        "population": 145912025,
        "GDP": 1464000,
        "GDP_unit": "billion",
        "land_area": 16376870,
        "land_area_unit": "km²"
      },
      {
        "id": 7,
        "name": "China",
        "population": 1439323776,
        "GDP": 14342900,
        "GDP_unit": "billion",
        "land_area": 9388211,
        "land_area_unit": "km²"
      },
      {
        "id": 8,
        "name": "India",
        "population": 1380004385,
        "GDP": 2869000,
        "GDP_unit": "billion",
        "land_area": 2973190,
        "land_area_unit": "km²"
      },
      {
        "id": 9,
        "name": "Brazil",
        "population": 212559417,
        "GDP": 1449000,
        "GDP_unit": "billion",
        "land_area": 8358140,
        "land_area_unit": "km²"
      },
      {
        "id": 10,
        "name": "Australia",
        "population": 25499884,
        "GDP": 1396000,
        "GDP_unit": "billion",
        "land_area": 7682300,
        "land_area_unit": "km²"
      },
      {
        "id": 11,
        "name": "Japan",
        "population": 126476461,
        "GDP": 5081000,
        "GDP_unit": "billion",
        "land_area": 364555,
        "land_area_unit": "km²"
      },
      {
        "id": 12,
        "name": "South Africa",
        "population": 59308690,
        "GDP": 351431,
        "GDP_unit": "billion",
        "land_area": 1213090,
        "land_area_unit": "km²"
      },
      {
        "id": 13,
        "name": "Saudi Arabia",
        "population": 34813871,
        "GDP": 793970,
        "GDP_unit": "billion",
        "land_area": 2149690,
        "land_area_unit": "km²"
      },
      {
        "id": 14,
        "name": "Argentina",
        "population": 45376763,
        "GDP": 449663,
        "GDP_unit": "billion",
        "land_area": 2780400,
        "land_area_unit": "km²"
      },
      {
        "id": 15,
        "name": "Nigeria",
        "population": 206139589,
        "GDP": 448120,
        "GDP_unit": "billion",
        "land_area": 910770,
        "land_area_unit": "km²"
      },
      {
        "id": 16,
        "name": "Mexico",
        "population": 128932753,
        "GDP": 1268000,
        "GDP_unit": "billion",
        "land_area": 1943950,
        "land_area_unit": "km²"
      }
];

// Route to get all countries
app.get('/api/countries', (req, res) => {
    res.json(countries);
});

// Route to get a specific country by ID
app.get('/api/countries/:id', (req, res) => {
    const countryId = parseInt(req.params.id);
    const country = countries.find(country => country.id === countryId);
    if (!country) {
        res.status(404).json({ error: 'Country not found' });
    } else {
        res.json(country);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
