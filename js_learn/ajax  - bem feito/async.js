$(document).ready(function(){
    $('#homee').on('click', () =>{
        $('#conteudo').load('home.html')
    })

    $('#sobree').on('click', () =>{
        $('#conteudo').load('sobre.html')
    })
})

//formas de programacao assincrona
/**
 * new Xmlhttprequest
 * metodos:
 * ajax.open('get', 'nomePagina.extensao')
 * ajax.send()
 * 
 * estados da requisiscao:
 * 0 - request not initialized
 * 1- server connect establisted
 * 3- request received
 * 4-processing request
 * 5- request finished and response is ready
 * 
 * status de uma requisicao
 * 
 */