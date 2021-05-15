<?php

//primeiro parametro DSN - data source name ou nome
//da fonte de dados ex: mysql
//segundo parametro user do db
//terceiro parametro senha do db
$dsn = 'mysql:host=localhost;dbname=php_pdo';
$usuario = 'root';
$senha = '';

//PDOException - ele captura todos os erros
//do php

try {

  $conexao = new PDO($dsn, $usuario, $senha);

  $query = '
    select * from tb_usuarios
  ';

  foreach($conexao->query($query) as $key => $value) {}



}catch(PDOException $e) {
  echo 'Erro , '.  $e->getCode() . 'Mensagem ' . $e->getMessage();
}



