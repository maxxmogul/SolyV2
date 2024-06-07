// api.js
const express = require('express');
const handleScoreboard = require('./scoreboard');

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Handle POST requests to /api/scoreboard
app.post('/api/scoreboard', (req, res) => {
    const { name, score } = req.body;
    handleScoreboard(name, score);
    res.json({ message: 'Scoreboard data received' });
});

module.exports = app;