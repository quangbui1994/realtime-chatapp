const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('The server is up');
});

module.exports = route;