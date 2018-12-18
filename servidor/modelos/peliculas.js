var conexion = require('../lib/conexionbd');

var Pelicula = function(id, titulo, anio, duracion, director, fecha_lanzamiento, puntuacion, poster, trama){
  this.id = id;
  this.titulo = titulo;
  this.anio = anio;
  this.duracion = duracion;
  this.director = director;
  this.fecha_lanzamiento = fecha_lanzamiento;
  this.puntuacion = puntuacion;
  this.poster = poster;
  this.trama = trama;
};

Pelicula.obtenerTodos = function(cb){
  var consultaSql = "SELECT * from pelicula";
  conexion.query(consultaSql, cb);
};

 module.exports = Pelicula;
