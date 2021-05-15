/**
 * o tiPO NUMBER É PRIMITIVO , E IMUTAVEL e é representado internamente pelo padrao 
 * 
 * IEEE 754  de 64 BITS
 * 
 * o js suporta 4 sistemas de numeraçao:
 * 1 - decimal , hexadecimal binario, octal
 * 
 * decimal - numraçao decimal de base 10 deve iniciar com 1 a 9 seguido por um numero 
 * de 0 a 9 com ou sem ponto
 * 
 * hexadecimal - de base 16 , deve iniciar com 0x ou OX  seguidos por numeros 
 * de 0 a 9 e letras de A a F
 * 
 * binario - de base 2 , deve iniciar com 0b ou 0B seguido por numeros de 0 a 1
 * sempre se le da direita pra esquerda
 * 
 * octal - de base 8 , deve iniciar com 0,0o , seguido por numeros de 0 a 7
 * 
 * 
 */

 //ex de number

 let n = new Number(123.4)

 //algumas operacoes pra number
 n.toExponential(10) //notacao cientifica

 n.toFixed(10) //quantidade de casas apos a virgula

 n.toPrecision(10) //n totoal de algarismos desse numero
