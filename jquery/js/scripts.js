//formas de inicializar o jquery

//forma padrao
//$(document).load()//carrega todos elementos antes
//$(document).ready(function() {
  //  $(".parag").html("ola mundo")
//})//carrega primeiro o DOM pra depois executar o script

//outra forma - escrevendo menos
/*$(function() {

})

*/

/*carregando antes de outra lib
jQuery(function($) {
    $(".parag").html("ola mundo")
})*/

//carregando depois de outra lib
var $j = jQuery.noConflict();
$j(document).ready(function() {
      $j(".parag").html("ola mundo")
  })