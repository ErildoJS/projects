//flexibilidade nos parametros

function show(param1, param2){
    var result = param1 + param2
    return result
}

show(4)

//funcoes anonimas

//function(){
  //  return 'ok'
//}

//wrapper - tecnica usada para atribuir uma funcao a uma variavel
var showLog = function(){
    return 'wrapper'
}

showLog()

//funcoes de callback

function exibirArtigo(id, callbackSucesso, callbackErro){
    if(true){
        callbackSucesso('funcoes de callback em js', 'funcoes bem usuais no dia a dia de um programador')
    }else{
        callbackErro('ocorreu um erro ao recuperar a funcao')
    }
}

var callbackSucesso = function(titulo, descricao){
    document.write('<h1>' + titulo + '</h1>')
    document.write('</hr>')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function(erro){
    document.write('<p><b>erro:</b>' + erro + '</p>')

}


exibirArtigo(1, callbackSucesso, callbackErro)