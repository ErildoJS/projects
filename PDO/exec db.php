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

  //executando extrucoes sql 
  $query = '
    create table tb_usuarios (
      id int not null primary key auto_increment,
      nome varchar(50) not null,
      email varchar(100) not null,
      senha varchar(32) not null
    )
  ';

  //exec() - executa uma query no db
  //retorna 0
  $conexao->exec($query);

  $query = '
      insert into tb_usuarios(
        nome, email, senha
      ) values (
      "erildo", "erildo@gmail.com", "12345"
      )
  ';

  $conexao->exec($query);


}catch(PDOException $e) {
  echo 'Erro , '.  $e->getCode() . 'Mensagem ' . $e->getMessage();
}



