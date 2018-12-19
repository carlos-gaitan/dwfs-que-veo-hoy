var Peliculas = require('../modelos/peliculas');
// http://localhost:8080/peliculas?pagina=1&titulo=pepe&genero=4&anio=1981&cantidad=52&columna_orden=titulo&tipo_orden=ASC

function obtenerPeliculas(req, res) {
  Peliculas.obtenerTodos(req.query, function(error, resultadoObtenerTodos){
  if (error){
    return res.status(500).json("error en el servidor");
  }
    Peliculas.obtenerCantidad(req.query, function(error, resultadoObtenerCantidad){
    if (error){
      return res.status(500).json("error en el servidor");
    }


  res.json({ peliculas: resultadoObtenerTodos, total: resultadoObtenerCantidad);///poner corchete
});
})
};

module.exports = {
	obtenerPeliculas: obtenerPeliculas
};
