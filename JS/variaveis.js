/**
 * ciclo de vida de uma varivel
 * 
 * 1-declaraçao - o nome da variavel é registrado no contexto de inicializaçao
 * , aka escopo
 * 2- inicializaçao - a variavel é inicializada com valor undefined
 * 2 - atribuicao - um valor pe atribuido a varivel
 * 
 * VAR - declarada e inicializada no escopo da funçao inteira, nao respeita esse bloco, 
 * permite a redeclaraçao e reactribuiçao
 * 
 * ex Var 
 * var pi = 3.141567
 * console.log(pi) - o resultado e o vvalor de pi
 * 
 * ex Var2
 * console.log(pi) 
 * var pi = 3.141567 - o resultado é undefined pk sempre que é executado algo em js
 * eu nao estou vendo mas tem uma funcao em volta desse codigo 
 * (caracteristica do sitema de modulos do node)
 * 
 * ex Var3
 * pi = 3 - chamado de reatribuiçao
 * 
 * ex Var4
 * var pi = 4 - chamado de redeclaraçao - permitido no js
 * 
 * ex var5
 * qualquer pessoa de outra linguagem vaiachar isso esquisito pk , ele ja tem o mindset
 * que se eu declarei uma funcao dentro de um bloco
 * a existencia dela so si da ali dentro
 * so que no js o Var tem escopo de todo funcao nao no bloco
 * if(true) {
 * var pi = 3.141592 
 *  
 * }
 * console.log(pi) 
 * 

 Let - declarada no escopo da funcao mas so é inicializada posteriormente
 , respeitando bloco, permite reatribuiçao
 n nao permite redeclaraçao

 ex let 1
 let pi = 3.141592
 console.log(pi) - o resultado é pi

 ex let 2
 console.log(pi) - o resultado é pi
 let pi = 3.141592 - o resultado e pi is not defined

 if(true) {
   let pi = 3.141592 - o resultado e pi is not defined
 }
 console.log(pi) - o resultado é erro pk o let nao funciona fora do escopo do if


 CONST - declaarada no escopo da funcao , mas so inicializada posteriormente
 , respeitando bloco , e nao permite reatribuicao nem redeclaraçao

 ex CONST 1
 const pi = 3.141592 - 
 console.log(pi) - o resultado é pi


 --------------------------------------------------

 toda varivel declara sem var let ou const , ganha escopo global


 um identificador deve comecar com a-z A-Z 0-9 _$
 */