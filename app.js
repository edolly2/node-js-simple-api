// Created simple API
// Installed ESlint
// Used Nodemon for environment

const express = require('express');

const app = express();

// Passes in the port |or| use port 3000 as fallback
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
