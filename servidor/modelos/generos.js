var conexion = require('../lib/conexionbd');

var Genero = function(id, nombre){
  this.id = id;
  this.nombre = nombre;
};

Genero.obtenerTodos = function(cb){
  var consultaSql = `SELECT * from genero`;
  conexion.query(consultaSql, cb);
};

module.exports = Genero;
