# Dump da tabela categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `uri` varchar(255) NOT NULL DEFAULT '',
  `description` text,
  `cover` varchar(255) DEFAULT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'post' COMMENT 'post, page, etc',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `title`, `uri`, `description`, `cover`, `type`, `created_at`, `updated_at`)
VALUES
	(1,'Controle','controle','Dicas e sacadas sobre como controlar suas contas com CaféControl. Vamos tomar um ótimo café?',NULL,'post','2018-10-22 15:24:12','2018-10-22 15:24:12'),
	(2,'Contas','contas','Dicas e sacadas sobre como controlar suas contas com CaféControl. Vamos tomar um ótimo café?',NULL,'post','2018-11-01 16:32:57','2018-11-01 16:33:25'),
	(3,'Finanças','financas','Dicas e sacadas sobre como controlar suas contas com CaféControl. Vamos tomar um ótimo café?',NULL,'post','2018-11-01 16:33:05','2018-11-01 16:33:27');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;