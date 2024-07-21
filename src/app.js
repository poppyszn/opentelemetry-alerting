const express = require('express');
const app = express();
const port = 3000;

// Route for 200 OK
app.get('/ok', (req, res) => {
    res.status(200).send('Everything is OK!');
});

// Route for 201 Created
app.post('/created', (req, res) => {
    res.status(201).send('Resource created successfully!');
});

// Route for 400 Bad Request
app.get('/bad-request', (req, res) => {
    res.status(400).send('Bad request!');
});

// Route for 401 Unauthorized
app.get('/unauthorized', (req, res) => {
    res.status(401).send('Unauthorized access!');
});

// Route for 403 Forbidden
app.get('/forbidden', (req, res) => {
    res.status(403).send('Access forbidden!');
});

// Route for 404 Not Found
app.get('/not-found', (req, res) => {
    res.status(404).send('Resource not found!');
});

// Route for 500 Internal Server Error
app.get('/server-error', (req, res) => {
    res.status(500).send('Internal server error!');
});

// Start the server
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
