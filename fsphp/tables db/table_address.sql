# Dump da tabela address
# ------------------------------------------------------------

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned DEFAULT NULL,
  `street` varchar(255) NOT NULL DEFAULT '',
  `number` varchar(255) NOT NULL DEFAULT '',
  `complement` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `addr_user` (`user_id`),
  CONSTRAINT `user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;

INSERT INTO `address` (`id`, `user_id`, `street`, `number`, `complement`, `created_at`, `updated_at`)
VALUES
	(1,1,'rua manoel pedro vieira, 810','810','casa 1','2018-09-03 16:40:57','2018-09-16 19:39:59'),
	(2,2,'paraguai','2041','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:01'),
	(3,3,'emilio daroz ','107','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:02'),
	(4,4,'rua lavinia moreira da silva','145','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:03'),
	(5,5,'padre anchieta','121','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:04'),
	(6,6,'rua amoroso costa','254','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:06'),
	(7,7,'alaor martins','312','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:07'),
	(8,8,'rua das violetas','330','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:09'),
	(9,9,'francisco carlos ','105','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:10'),
	(10,10,'torino','95','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:12'),
	(11,11,'rua erotidas','64','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:13'),
	(12,12,'r. orquideas','169','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:14'),
	(13,13,'rua joffre motta','44','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:14'),
	(14,14,'rua piauí','17','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:15'),
	(15,15,'fernandes marques','1229','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:16'),
	(16,16,'av. beta','07','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:17'),
	(17,17,'abagiba','674','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:23'),
	(18,18,'gumercindo araujo','302','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:25'),
	(19,19,'rua 01, quadra 35','35b','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:26'),
	(20,20,'rua piauí','23d','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:27'),
	(21,21,'rua leopoldina araãºjo','380','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:28'),
	(22,22,'rua conceiã§ã£o','101','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:29'),
	(23,23,'rua benedetto bonfilgi','755','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:30'),
	(24,24,'rua sã£o francisco','17','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:30'),
	(25,25,'rua dona zulmira','479','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:32'),
	(26,26,'rua mampituba','740','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:32'),
	(27,27,'dezeseis','151','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:34'),
	(28,28,'rua dos goitacazes','375','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:35'),
	(29,29,'av lucio jose de meneses','930','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:36'),
	(30,30,'caetano','3457','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:38'),
	(31,31,'um nova ','335','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:39'),
	(32,32,'sres area especial','19','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:40'),
	(33,33,'islandia','99','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:41'),
	(34,34,'independência','700','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:42'),
	(35,35,'sebastiã£o thomaz de oliveira','25','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:46'),
	(36,36,'nogueira','185','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:48'),
	(37,37,'tv londrina','12','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:49'),
	(38,38,'teofilo otoni','222','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:51'),
	(39,39,'joã£o rasmussen','244','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:53'),
	(40,40,'travessa elizeu araãºjo','46','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:56'),
	(41,41,'av. dr. joão pessoa','185','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:58'),
	(42,42,'travessa brandão','4','casa 1','2018-09-03 16:40:57','2018-09-16 19:40:59'),
	(43,43,'coqueiros','SN','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:00'),
	(44,44,'estrada m boi mirim','820','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:01'),
	(45,45,'travessa dos comerciarios ','5','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:02'),
	(46,46,'dos jacarandas','30','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:03'),
	(47,47,'dona ermelinda pereira','413','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:04'),
	(48,48,'rua projetada 02','742','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:05'),
	(49,49,'samambaia','96','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:07'),
	(50,50,'rua dos gerã¢nios','110','casa 1','2018-09-03 16:40:57','2018-09-16 19:41:09');

/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;