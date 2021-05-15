#existem 3 tipos de erros que os compiladores analisam
#sintatico , lexico, semantico

try:
    x = int(input("digite a idade"))
except:
    print("vc nao digitou a idade")
else:
    print(f"idade é {x}")
finally:
    print("obrigado")