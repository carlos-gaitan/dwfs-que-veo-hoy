var Peliculas = require('../modelos/peliculas');
// http://localhost:8080/peliculas?pagina=1&titulo=pepe&genero=4&anio=1981&cantidad=52&columna_orden=titulo&tipo_orden=ASC

function obtenerPeliculas(req, res) {
  Peliculas.obtenerTodos(req.query, function(error, resultadoObtenerTodos){
  if (error){
    return res.status(500).json("error en el servidor msj #1");
  }
    Peliculas.obtenerCantidad(req.query, function(error, resultadoObtenerCantidad){
      if (error){
        return res.status(500).json("error en el servidor msj #2");
      }
      res.json({ peliculas: resultadoObtenerTodos, total: resultadoObtenerCantidad[0].totalPeliculas });
    });
  });
};

function obtenerInfoPelicula(req, res){
  Peliculas.obtenerInfo(req.params.id, function(error, resultadoObtenerInfo) {
    if (error) {
      return res.status(500).json("error en el servidor msj #3");
    }
    res.json({ pelicula: resultadoObtenerInfo[0], genero: resultadoObtenerInfo[0].genero, actores: resultadoObtenerInfo.map(function(s) {return {nombre: s.Actores};}) });
  });
};

function obtenerPeliculaRecomendada(req, res) {
  Peliculas.obtenerRecomendadas(req.query, function(error, resultadoObtenerRecomendadas) {
    if (error) {
      return res.status(500).json("error en el servidor msj #5");
    }
    console.log(resultadoObtenerRecomendadas);
    res.json({ peliculas: resultadoObtenerRecomendadas });
  });
};

module.exports = {
	obtenerPeliculas: obtenerPeliculas,
  obtenerInfoPelicula: obtenerInfoPelicula,
  obtenerPeliculaRecomendada: obtenerPeliculaRecomendada
};
