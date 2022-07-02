const mongoose = require('mongoose');

// Create a Schema
const { Schema } = mongoose;
// Create NEW Schema
const bookModel = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: { type: String },
    read: { type: Boolean, default: false },
  },
);

// Export bookModel
module.exports = mongoose.model('Book', bookModel);
