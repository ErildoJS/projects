<?php

//primeiro parametro DSN - data source name ou nome
//da fonte de dados ex: mysql
//segundo parametro user do db
//terceiro parametro senha do db
$dsn = 'mysql:host=localhost;dbname=php_pdo';
$usuario = 'root';
$senha = '';


$conexao = new PDO($dsn, $usuario, $senha);

