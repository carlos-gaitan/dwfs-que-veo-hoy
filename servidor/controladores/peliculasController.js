var con = require('../lib/conexionbd');

function listadoPeliculas(req, res) {
  var consultaSql = SELECT * from pelicula;
  con.query(consultaSql, function(err, res){
    if (err || !res.length){
      return cb({ error: true, message: "error." })
    }
    cb(null, res[0])
  })

 	// var listado = req.query.nombre;
  //
 	// res.send("Hola "+nombre+", hoy es "+dia+" de "+mes_nombre+" de "+año);
}

module.exports = {
	listadoPeliculas : listadoPeliculas
};
