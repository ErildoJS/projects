/**
 * a forma masi simples de converter é usando a funcao construtora number
 * ex: Number("10")
 * 
 * ex: Number("0xFF")
 * 
 * ex: Number("0b10")
 * 
 * ex: Number("0o10")
 * 
 * ex: Number() == 0
 * 
 * 
 * ex: Number("sdf") == NAN
 * 
 * 
 * outra forma é usando os operadores numericos
 * ex: ~~"10"
 * 
 * ex: +"10"  obs: coersao de tipo - o js converte a string par number
 * 
 * ex: "10" - 0
 * 
 * ex: "10" * 1
 * 
 * ex: "10" / 1
 * 
 * ex: "10" + 0 = o js concatena == '100'
 * 
 * 
 * outro forma é usando o metodo toString()
 * 
 * 
 * (0xA).toString(10) == '10'
 * 
 * (0b1010).toString(16) == 'a'
 * 
 * (010).toString(2) == 
 * 
 * (10).toString(8) == 
 * 
 * parseInt() - converte string para int, por padrao te leva pra base 10
 * 
 * parseInt("010", 10)
 * parseInt("9.9", 10)
 * parseInt("A", 16)
 * parseInt("11", 2)
 * parseInt("010", 8)
 * 
 * 
 * parseFloat()
 * 
 * parseFloat("10")
 * parseFloat("9.9")
 * parseFloat("9.9")
 * parseFloat("0xFF") == 0 obs: sempre que tenho uma parte string ele considera
 * so o numero
 * 
 * * parseFloat("0b10") == 0 
 * 
 * 
 * 
 * 
 */