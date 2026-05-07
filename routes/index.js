var express = require('express');
var router = express.Router();

const quotes = require('../data/data.json');

router.get('/', function (req, res, next) {

    // 1. Read the data.json file
    // 2. Pick a random item from the data.json list
    // 3. Render the index.hbs template with the random item.
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    res.render('index', {
        name: randomQuote.name,
        quote: randomQuote.quote
    });
});

router.get('/quote', function (req, res) {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    res.json(randomQuote);
});


module.exports = router;

