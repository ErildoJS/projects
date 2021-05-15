<?php
  //permitem manipula atributos do modelo, sao do tipo void

  class Funcionario {
    public $nome;
    public $telef;
    public $nFilhos;


    //getters e setters magicos
    function __set($atributo, $valor) {
      $this->$atributo = $valor;
    }

    function __get($atributo) {
      return $this->$atributo;
    }
    /*
    public setNome($nome) {
       $this->nome = $nome;
    }

    public setTelef($telef) {
       $this->telef = $telef;
    }

    public setNumFilhos($nFilhos) {
       $this->nFilhos = $numFilhos;
    }

    function getNome() {
      return $this->nome;
    }

    function getNumFilhos() {
      return $this->nFilhos;
    }*/

    public function resumirCF() {
      return 
    }

    //chamando outros metodos dentro de um metodo
    public function modNF($numF) {
      $this->__get('nome');
    }
    

    public function modNF($numF) {
      $this->nFilhos = $numF;
    }
  }

  $y = new Funcionario()

  $y->resumirCF()
  $y->__set('nome', 'erildo')
  $y->modNF()
  echo $y->__get('nome') . 'possui' . $y->__get('nFilhos') . 'filhos';*/

  /*
  $y->resumirCF()
  $y->setNome('erildo')
  $y->modNF()
  echo $y->getNome() . 'possui' . $y->getNumFilhos() . 'filhos';*/


?>