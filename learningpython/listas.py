#variaveis compostas, ou seja armazenam mais de um valor

x = [1,3,2,8]
x.append(10)#append - add um item no final da lista
print(x)

x.insert(0, 9)#insert - add um item no local especificado da lista
print(x)


x.pop(0)#pop - remove o ultimo ou o indidce espesificado  item da lista
print(x)

x.remove(10)#remove - remove um item da lista passando o valor
print(x)

print(len(x))# qtd de elementos da lista

x.sort()#sort -  organiza os item da lista
print(x)


x.sort(reverse=True)#sort -  organiza de forma decrescente os item da lista
print(x)

x.reverse()#reverse
print(x)

x.max()#max, min sum - valor maximo minimo e soma
print(x)

#ou

#x = list()