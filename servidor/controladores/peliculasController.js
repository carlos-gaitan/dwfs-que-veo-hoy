var Peliculas = require('../modelos/peliculas');

function obtenerPeliculas(req, res) {
  Peliculas.obtenerTodos(function(error, resultadoQuery){
  if (error){
    return res.status(500).json("error en el servidor");
  }
  res.json({ peliculas: resultadoQuery });
});
};

module.exports = {
	obtenerPeliculas: obtenerPeliculas
};
