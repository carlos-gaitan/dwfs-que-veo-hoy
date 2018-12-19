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
// http://localhost:8080/peliculas?pagina=1&titulo=pepe&genero=4&anio=1981&cantidad=52&columna_orden=titulo&tipo_orden=ASC
Pelicula.obtenerCantidad = function(filtros, cb){
  var titulo = filtros.titulo;
  var genero = filtros.genero;
  var anio = filtros.anio;

  var pagina = filtros.pagina;
  var cantidad = filtros.cantidad;
  var columna_orden = filtros.columna_orden;
  var tipo_orden = filtros.tipo_orden;

  var contador = 0;
  var consultaSql = "SELECT COUNT(pelicula.id) from pelicula INNER JOIN genero ON pelicula.genero_id = genero.id";
  // condiciones
  if (titulo) {
    if (contador == 0) {
      consultaSql += " WHERE";
    } else {
      consultaSql += " AND";
    };
    contador ++;
    consultaSql += " pelicula.titulo LIKE '" + titulo + "%'";
  };
//select * from pelicula join  where ;

  if (genero) {
    if (contador == 0) {
      consultaSql += " WHERE";
    } else {
      consultaSql += " AND";
    };
    contador ++;
    consultaSql += " pelicula.genero_id = '" + genero + "'";
  };

  if (anio) {
    if (contador == 0) {
      consultaSql += " WHERE";
    } else {
      consultaSql += " AND";
    };
    contador ++;
    consultaSql += " pelicula.anio = " + anio;
  };


  consultaSql += ";";
  console.log(consultaSql);
  conexion.query(consultaSql, cb);

};

Pelicula.obtenerTodos = function(filtros, cb){
  var titulo = filtros.titulo;
  var genero = filtros.genero;
  var anio = filtros.anio;

  var pagina = filtros.pagina;
  var cantidad = filtros.cantidad;
  var columna_orden = filtros.columna_orden;
  var tipo_orden = filtros.tipo_orden;

  var contador = 0;
  var consultaSql = "SELECT * from pelicula INNER JOIN genero ON pelicula.genero_id = genero.id";
  // condiciones
  if (titulo) {
    if (contador == 0) {
      consultaSql += " WHERE";
    } else {
      consultaSql += " AND";
    };
    contador ++;
    consultaSql += " pelicula.titulo LIKE '" + titulo + "%'";
  };
//select * from pelicula join  where ;

  if (genero) {
    if (contador == 0) {
      consultaSql += " WHERE";
    } else {
      consultaSql += " AND";
    };
    contador ++;
    consultaSql += " pelicula.genero_id = '" + genero + "'";
  };

  if (anio) {
    if (contador == 0) {
      consultaSql += " WHERE";
    } else {
      consultaSql += " AND";
    };
    contador ++;
    consultaSql += " pelicula.anio = " + anio;
  };

  // orden
  consultaSql += " ORDER BY " + columna_orden;

  // paginacion
  consultaSql += ` LIMIT ${(pagina - 1) * cantidad},${cantidad}`;


  consultaSql += ";";
  console.log(consultaSql);
  conexion.query(consultaSql, cb);
};

 module.exports = Pelicula;
