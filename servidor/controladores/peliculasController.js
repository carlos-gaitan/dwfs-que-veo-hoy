var conexion = require('../lib/conexionbd');

function obtenerPeliculas(req, res) {
  console.log("Entro a obtenerPeliculas");
  var consultaSql = "SELECT * from pelicula";
  conexion.query(consultaSql, function(error, resultadoQuery){
    if (error || !resultadoQuery.length){
      return { error: true, message: "error." }
    }
    res.send(JSON.stringify({ peliculas: resultadoQuery }));
    //res.send({ peliculas: resultadoQuery });
  })
}

module.exports = {
	obtenerPeliculas: obtenerPeliculas
};
