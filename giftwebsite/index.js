const express = require('express');
const path = require('path');

const app = express();

const PORT = 9000;

// Serve the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve the landing page only for the public home routes.
app.get(['/', '/home.html'], (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'home.html'));
});

// React Router handles /app and all of its child routes in the browser.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Gift Website running on port ${PORT}`);
});
