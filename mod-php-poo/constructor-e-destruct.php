<?php
//sao o ciclo de vida de um obj
//quando criamos a instancia de uma classe aoutomaticamente o metodo construct
//é chamado, para ser tomada uma accao, sendo essa accao disparada 
//automaticamente



//destruct - executado automaticamente quando a instancia do obj é removido
//da memoria

 class Pessoa {
   public $nome = null;
   function __construct($nome) {
      echo 'obj inicializado';
      $this->nome = $nome;
   }

   function __destruct() {
     echo 'obj removido';
   }

   function __get($atributo) {
     return $this->$atributo;
   }
 }

 $x = new Pessoa('erildo');
 unset($x);


?>