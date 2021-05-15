nome = input('Seu nome: ')
idade = int(input('qual sua idade: '))

p1 = int(input('primeira nota: '))
p2 = int(input('segunda nota: '))

media = (p1 + p2)/2
nome = nome.lower().title()#deixa a 1 letra da palavra em maiusculo
if media >= 6 and idade >= 18:
    print('o aluno {} ' .format(nome) + 'aprovou com a media de {}'.format(media))
else:
    print('precisa estudar mais')




