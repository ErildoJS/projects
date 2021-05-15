# Dump da tabela users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL DEFAULT '',
  `last_name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `status` varchar(50) NOT NULL DEFAULT 'registered' COMMENT 'registered, confirmed',
  `password` varchar(255) NOT NULL DEFAULT '',
  `forget` varchar(255) DEFAULT NULL,
  `document` varchar(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `status`, `password`, `forget`, `document`, `photo`, `created_at`, `updated_at`)
VALUES
	(1,'Robson','Leite','cursos@upinside.com.br','registered','$2y$10$7aQNdKPaeaX0wwxShqfDN.Jwc4SzPPQGOk7fZdLgV/WmGvVx6oFwm',NULL,NULL,'images/2018/10/robsonvleite.jpg','2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(2,'Alexandre','Santos','alexandre27@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(3,'Willian','Santos','willian28@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(4,'Eleno','Santos','eleno29@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(5,'Lucas','Santos','lucas30@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(6,'Mateus','Santos','mateus31@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(7,'João','Santos','joão32@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(8,'Felipe','Santos','felipe33@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(9,'Anderson','Santos','anderson34@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(10,'Elton','Santos','elton35@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(11,'Leonardo','Santos','leonardo36@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(12,'Regilton','Santos','regilton37@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(13,'Sidney','Santos','sidney38@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(14,'Lourival','Santos','lourival39@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(15,'Henrique','Santos','henrique40@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(16,'Daniel','Santos','daniel41@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(17,'Pedro','Santos','pedro42@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(18,'Andre Roberto','Santos','andre roberto43@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(19,'Ozeias','Santos','ozeias44@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(20,'Arnobio','Santos','arnobio45@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(21,'Roniel','Santos','roniel46@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(22,'Caíque','Santos','caíque47@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(23,'Lucas','Santos','lucas48@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(24,'Francisco','Santos','francisco49@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(25,'Cristian','Santos','cristian50@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(26,'Eduardo','Santos','eduardo51@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(27,'Rodrigo','Santos','rodrigo52@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(28,'Raphael','Santos','raphael53@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(29,'Jose','Santos','jose54@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(30,'Rodrigo','Santos','rodrigo55@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(31,'Diego','Santos','diego56@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(32,'Alexandre','Santos','alexandre57@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(33,'Edimar','Santos','edimar58@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(34,'Jackell','Santos','jackell59@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(35,'Luis','Santos','luis60@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(36,'Lucas','Santos','lucas61@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(37,'Wander','Santos','wander62@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(38,'Tairo','Santos','tairo63@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(39,'Rubens','Santos','rubens64@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(40,'Hugo','Santos','hugo65@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(41,'Gustavo','Santos','gustavo66@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(42,'Paulo','Santos','paulo67@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(43,'Rodrigo','Santos','rodrigo68@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(44,'Denio','Santos','denio69@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(45,'Idalmir','Santos','idalmir70@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(46,'Ataide','Santos','ataide71@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(47,'Luiz','Santos','luiz72@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(48,'Luciano','Santos','luciano73@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(49,'Adir','Santos','adir74@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46'),
	(50,'Tainan','Santos','tainan75@email.com.br','registered','',NULL,NULL,NULL,'2018-09-03 16:39:07','2018-10-24 11:26:46');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;