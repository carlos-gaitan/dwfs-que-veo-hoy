CREATE DATABASE `queveohoy`;

USE `queveohoy`;

CREATE TABLE `pelicula` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `titulo` varchar(100) NOT NULL,
    `anio` int(5) DEFAULT NULL,
    `duracion` int(5) DEFAULT NULL,
    `director` varchar(400) DEFAULT NULL,
    `fecha_lanzamiento` date DEFAULT NULL,
    `puntuacion` int(2) DEFAULT NULL,
    `poster` varchar(300) DEFAULT NULL,
    `trama` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
