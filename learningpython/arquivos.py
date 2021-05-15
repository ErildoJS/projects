#open()
#w - escrita
#a - nao apaga o que ja tem
#r - ler

arq = open('er.txt', 'a')
texto = '''
oi erildo
hoje vc foi bem de mais
o dia vai ser legal
'''
arq.write(texto)
arq.close()