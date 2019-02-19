const mongoose = require("../db/connection")

const Schema = mongoose.Schema

// define a schema where the field-name is the key in the object passed in
// as an argument to mongoose.Schema, and the object values are the data type of that field

const Artists = new Schema({
  Name: String,
  Genre: String,
})

module.exports = mongoose.model("Artists", Artists)