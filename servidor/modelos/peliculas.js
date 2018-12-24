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

Pelicula.obtenerCantidad = function(filtros, cb){
  var titulo = filtros.titulo;
  var genero = filtros.genero;
  var anio = filtros.anio;
  var pagina = filtros.pagina;
  var cantidad = filtros.cantidad;
  var columna_orden = filtros.columna_orden;
  var tipo_orden = filtros.tipo_orden;

  var consultaSql = `SELECT COUNT(pelicula.id) as totalPeliculas from pelicula INNER JOIN genero ON pelicula.genero_id = genero.id WHERE 1 = 1`;

  // aqui defino las condiciones
  if (titulo) { consultaSql += ` AND pelicula.titulo LIKE \'\%${titulo}\%\'` };
  if (genero) { consultaSql += ` AND pelicula.genero_id = ${genero}` };
  if (anio) { consultaSql += ` AND pelicula.anio = ${anio}` };
  
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

  var consultaSql = `SELECT pelicula.*, genero.nombre from pelicula INNER JOIN genero ON pelicula.genero_id = genero.id WHERE 1 = 1`;

  // aqui defino las condiciones
  if (titulo) { consultaSql += ` AND pelicula.titulo LIKE \'\%${titulo}\%\'` };
  if (genero) { consultaSql += ` AND pelicula.genero_id = ${genero}` };
  if (anio) { consultaSql += ` AND pelicula.anio = ${anio}` };

  // aqui defino el orden
  consultaSql += ` ORDER BY ${columna_orden}`;

  // aqui defino el tema de la paginacion
  consultaSql += ` LIMIT ${(pagina - 1) * cantidad},${cantidad}`;

  conexion.query(consultaSql, cb);
};

Pelicula.obtenerInfo = function(id, cb) {
  var consultaSql = `SELECT P.poster, P.titulo, P.anio, P.trama, P.fecha_lanzamiento, P.director, P.duracion, P.puntuacion, G.nombre as genero, A.nombre as Actores from pelicula as P left join genero as G on P.genero_id = G.id left join actor_pelicula as AP on P.id = AP.pelicula_id left join actor as A on AP.actor_id = A.id where P.id = ${id}`;
  conexion.query(consultaSql, cb);
};

Pelicula.obtenerRecomendadas = function(filtros, cb) {
  var genero = filtros.genero;
  var anio_inicio = filtros.anio_inicio;
  var anio_fin = filtros.anio_fin;
  var puntuacion = filtros.puntuacion;

  var consultaSql = `SELECT P.id, P.poster, P.trama, P.titulo, G.nombre FROM pelicula as P LEFT JOIN genero as G ON P.genero_id = G.id WHERE 1 = 1`;

  // aqui pongo las condiciones
  if (genero) { consultaSql += ` AND G.nombre = "${genero}"` };
  if (anio_inicio) { consultaSql += ` AND P.anio >= ${anio_inicio}` };
  if (anio_fin) { consultaSql += ` AND P.anio <= ${anio_fin}` };
  if (puntuacion) { consultaSql += ` AND P.puntuacion = ${puntuacion}` };

  conexion.query(consultaSql, cb);
};

 module.exports = Pelicula;
