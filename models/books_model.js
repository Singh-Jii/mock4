const mongoose = require("mongoose");

const model_Schema = new mongoose.Schema({
  Title: { type: String, require: true },
  Author: { type: String, require: true },
  Genre: { type: String, require: true, enum: ["Fiction", "Science", "Comic"] },
  Description: { type: String, require: true },
  Price: { type: Number, require: true }
}, {
  versionKey: false
});

const my_books_model = mongoose.model("Book", model_Schema);

module.exports = { my_books_model };
