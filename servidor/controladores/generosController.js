var Genero = require('../modelos/generos');

function obtenerGeneros(req, res) {
  Genero.obtenerTodos(function(error, resultadoQuery){
    if (error){
      return res.status(500).json("error en el servidor, contactese con elcharly.com");
    }
    res.json({ generos: resultadoQuery });
  });
};

module.exports = {
  obtenerGeneros: obtenerGeneros
};
