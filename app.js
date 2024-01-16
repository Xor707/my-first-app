// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port for the server to listen on
const port = 2000;

// Start the server

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
