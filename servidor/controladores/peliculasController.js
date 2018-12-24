var Peliculas = require('../modelos/peliculas');

function obtenerPeliculas(req, res) {
  Peliculas.obtenerTodos(req.query, function(error, resultadoObtenerTodos) {
    if (error) {
      return res.status(500).json("hups error, contactese con elcharly.com");
    };
    Peliculas.obtenerCantidad(req.query, function(error, resultadoObtenerCantidad) {
        if (error) {
          return res.status(500).json("hups error, contactese con elcharly.com");
        };
        res.json({ peliculas: resultadoObtenerTodos, total: resultadoObtenerCantidad[0].totalPeliculas });
    });
  });
};

function obtenerInfoPelicula(req, res) {
  Peliculas.obtenerInfo(req.params.id, function(error, resultadoObtenerInfo) {
    if (error) {
      return res.status(500).json("hups error, contactese con elcharly.com");
    };
    res.json({pelicula: resultadoObtenerInfo[0],
              genero: resultadoObtenerInfo[0].genero,
              actores: resultadoObtenerInfo.map(function(s) {return {nombre: s.Actores}})
            });
  });
};

function obtenerPeliculaRecomendada(req, res) {
  Peliculas.obtenerRecomendadas(req.query, function(error, resultadoObtenerRecomendadas) {
    if (error) {
      return res.status(500).json("hups error, contactese con elcharly.com");
    }
    res.json({ peliculas: resultadoObtenerRecomendadas });
  });
};

module.exports = {
	obtenerPeliculas: obtenerPeliculas,
  obtenerInfoPelicula: obtenerInfoPelicula,
  obtenerPeliculaRecomendada: obtenerPeliculaRecomendada
};
