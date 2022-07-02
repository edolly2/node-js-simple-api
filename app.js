// Used node 16.13.2
// Created simple API
// Installed Express
// Installed ESlint
// Used Nodemon for environment

// Require Express
const express = require('express');
const mongoose = require('mongoose');

/** SECTION */
// Instance of Express
const app = express();
// Opens database connection through mongoose to mongo database
const db = mongoose.connect('mongodb://localhost/bookAPI');
// Deals with all Routes with Express Router
const bookRouter = express.Router();
// Passes in the port |or| use port 3000 as fallback
const port = process.env.PORT || 3000;
// Create a book model
const Book = require('./models/bookModel');
/** SECTION */

// GET request - when sent to port will respond back with res.send('Welcome to my Nodemon API!')
bookRouter.route('/books')
  .get((req, res) => {
    Book.find((err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });
// Use the bookRouter route
app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

// Listens on PORT from our Nodemon Config
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
