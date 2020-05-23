var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ClaseSchema = new Schema({
  nombre: String,
  semestre: Number,
});

module.exports = mongoose.model("Clase", ClaseSchema);
