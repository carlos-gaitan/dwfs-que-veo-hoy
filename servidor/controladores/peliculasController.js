var conexion = require('../lib/conexionbd');

function listadoPeliculas(req, res) {
  var consultaSql = SELECT * from pelicula;
  conexion.query(consultaSql, function(error, resultadoQuery){
    if (err || !res.length){
      return { error: true, message: "error." }
    }
    res.send({resultadoQuery});
  })

 	// var listado = req.query.nombre;
  //
 	// res.send("Hola "+nombre+", hoy es "+dia+" de "+mes_nombre+" de "+año);
}

module.exports = {
	listadoPeliculas: listadoPeliculas
};
