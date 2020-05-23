var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AlumnosSchema = new Schema({
  nombre: String,
  apellido: String,
  matricula: String,
  carrera: String,
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Alumno", AlumnosSchema);
