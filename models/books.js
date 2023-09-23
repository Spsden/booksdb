const mongoose = require("mongoose");

const mongooseFuzzySearching= require("mongoose-fuzzy-searching");


 const BookSchema = new mongoose.Schema({
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
  publisher:{
    type:String,
    required: [true, "book publisher required"],

  },
  book_author:{
    type:String,
    required: [true, "book author required"],

  },
  year_of_publication:{
    type:String,
    required: [true, "book year-of-publication required"],

  },



},{timestamps:true});

BookSchema.index({book_title: 'text'});


BookSchema.plugin(mongooseFuzzySearching, { fields: ['book_title'] })



module.exports = mongoose.model("book-collec3", BookSchema);
