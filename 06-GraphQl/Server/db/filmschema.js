
var mongoose = require('mongoose')

var filmSchema = new mongoose.Schema({
    name:String,
    poster:String,
    price:Number
  })
  
   var FilmModel = mongoose.model("film",filmSchema);
  


   module.exports = FilmModel