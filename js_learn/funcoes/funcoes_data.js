//
var date = new Date()

date.getFullYear()

//adicionar ou remoover dias da data

document.write(date.toString())
date.setDate(date.getDate() + 1)

var data1 = new Date(2017, 0, 15)
var data2 = new Date(2017, 1, 23)

document.write(data1.toString())
document.write(data2.toString())

//converter para algo que possa ser calculado

document.write(data.getTime())//retornam osd milisegundos desde 1 jan de 1970 ate a data especifica
document.write(data1.getTime())

//encontrar a qtd de milisegundos entre data1 e data2

document.write(data1.getTime - data2.getTime())
var miliseg_entre_datas = Math.abs(data1.getTime - data2.getTime())
document.write(miliseg_entre_datas)

//1 dia tem 24h, cada hora tem 60 min,
// cada min tem 60seg e cada seg tem 1000milisegundo

//qnantos milisegundos existem em um dia?
var miliseg_por_dia = (1*24*60*60*1000)
document.write(' 1 dia tem ' + miliseg_por_dia + ' milisegundos')

document.write(Math.ceil(miliseg_entre_datas / miliseg_por_dia))



