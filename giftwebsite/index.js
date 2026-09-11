const express = require('express');
const path = require('path');

const app = express();

const PORT = 9000;

// Serve the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve home.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'home.html'));
});

// Fallback for React/static pages
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'home.html'));
});

app.listen(PORT, () => {
    console.log(`Gift Website running on port ${PORT}`);
});