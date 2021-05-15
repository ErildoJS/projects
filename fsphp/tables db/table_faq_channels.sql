
# Dump da tabela faq_channels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `faq_channels`;

CREATE TABLE `faq_channels` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `channel` varchar(255) DEFAULT NULL,
  `description` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `faq_channels` WRITE;
/*!40000 ALTER TABLE `faq_channels` DISABLE KEYS */;

INSERT INTO `faq_channels` (`id`, `channel`, `description`, `created_at`, `updated_at`)
VALUES
	(1,'Sobre o CaféControl','Saiba mais sobre o CaféControl','2018-10-21 09:24:51','2018-10-21 09:27:21');

/*!40000 ALTER TABLE `faq_channels` ENABLE KEYS */;
UNLOCK TABLES;