CREATE DATABASE IF NOT EXISTS `db`;
USE `db`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `users`
VALUES
  (1, 'André Soares', 'andre@email.com', '123456'),
  (2, 'Nato Álvares', 'nato@email.com', '123456');