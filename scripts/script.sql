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
    `genero_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`genero_id`) REFERENCES genero(`id`),
);

CREATE TABLE `genero` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(30) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `actor` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nombre` varchar(70) NOT NULL,

  PRIMARY KEY (`id`)
);

CREATE TABLE `actor_pelicula` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `actor_id` int(11) NOT NULL,
    `pelicula_id` int(11) NOT NULL,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`actor_id`) REFERENCES actor(`id`),
  FOREIGN KEY (`pelicula_id`) REFERENCES pelicula(`id`)
);
