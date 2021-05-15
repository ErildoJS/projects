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

  //retorna um pdo statment
  //apartir dessa variavel podemos ter acesso /a metodos
  // para manipular o db
  $stmt = $conexao->query($query);

  //fetchAll() - retorna todos registros recuperados da
  //consulta
  $lista = $stmt->fetchAll(PDO::FETCH_ASSOC);//indice associativo
  //$lista = $stmt->fetchAll(PDO::FETCH_NUM);//indice numerico
  //$lista = $stmt->fetchAll(PDO::FETCH_BOTH);//indice ambos
  //$lista = $stmt->fetchAll(PDO::FETCH_OBJ);//retorna em obj

  foreach($lista as $key => $value) {
    
  }

  
  echo '<pre>';
  print_r($lista);
  echo '</pre>';

  //echo $lista[2]['email'];//associativo



}catch(PDOException $e) {
  echo 'Erro , '.  $e->getCode() . 'Mensagem ' . $e->getMessage();
}



