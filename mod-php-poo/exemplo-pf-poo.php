<?php
  //procedural - faz chamada de procedimentos

  $a = 10;
  $b = 7;

  $operador = 'soma';

  function calcular($a, $b, $operador) {
    if($operador == 'soma') {
      return $a + $b
    }

    return false;
  }

  echo calcular($a, $b, $operador);

  //class - extruturas de dados com comportamentos

  class Calculadora {
    public $a = 10
    public $b = 7
    public $operador = 'soma';

    public function calcular() {
      if(this->$operador == 'soma') {
        return this->$a + this->$b
      }

      return false;
    }
  }

  $calcular = new Calculadora()
  echo $calcular->$calcular()

?>