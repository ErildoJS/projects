def somar(n1, n2):
    print(f' a soma é {n1+n2}')

somar(2,5)

#empacotamente de parametros

#def numa tupla()

def numeros(*list):
    print(list)
numeros(2,3,4,5,6)

#retornando valores de funcoes

#return - joga o valor a seguir pra uma variavel

def retorna():
    return 10

a = retorna()
print(a)

def retorna2():
    return 10, 20

a, b = retorna2()
print(a, b)