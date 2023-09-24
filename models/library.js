const mongoose = require("mongoose");

const LibrarySchema = new mongoose.Schema({
  gbooks_id: {
    type: String,
    required: [true, "gbooks type required"],
  },
  ISBN: {
    type: String,
    required: [true, "ISBN type required"],
  },
  book_title: {
    type: String,
    required: [true, "book title required"],
  },
  image_url_s: {
    type: String,
  },
  image_url_m: {
    type: String,
  },
  image_url_l: {
    type: String,
  },
  publisher: {
    type: String,
    required: [true, "book publisher required"],
  },
  book_author: {
    type: String,
    required: [true, "book author required"],
  },
  number_available: {
    type: Number,
    required: [true, "provide number available"],
  },
  year_of_publication: {
    type: String,
    required: [true, "book year-of-publication required"],
  },
});

module.exports = mongoose.model("library", LibrarySchema);
