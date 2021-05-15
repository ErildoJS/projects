class Despesa {
  constructor(ano, mes, dia, tipo, descricao, valor) {//4
    this.ano = ano 
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
  }

  //11
  validarDados() {
    for(let i in this) {
      if(this[i] === undefined || this[i] === '' || this[i] === null) {
        return false
      }
    }

    return true
  }
}

class Bd {
  constructor() {
    //10 - criando um id incial------------- (important)
    let id = localStorage.getItem('id')//verificando se esse id existe

    if(id === null) { //se o id nao existir

      localStorage.setItem('id', 0)//setamos o id incial com sendo zero(0)
    }
  }
  //metodo para primeiro verificar se existi um id dentro de localstorage
  getProximoId() {// 8- 
    //pegando o id que vem por padrao 
    let proximoId = localStorage.getItem('id')

    //e somando + 1
    return parseInt(proximoId) + 1
  }

  gravar(d) {
    let id = this.getProximoId()//9
    
    localStorage.setItem(id, JSON.stringify(d))

    //pegando o valor do id e atribuindo no ja existente
    localStorage.setItem('id',id)

  }

  recuperaTodosRegistros() {
    let despesas = Array()
    let id = localStorage.getItem('id')

    //recuperando todas as despesas
    for(let i = 1; i <= id; i++) {
      //recuperar a despesa

      let despesa = JSON.parse(localStorage.getItem(i))

      
      //removendo despesa null
      if(despesa === null) {
        continue
      }

      despesas.push(despesa)
    }
    return despesas
  }
}

let db = new Bd()

function cadastrarDespesa() { //1
  //pegando os elementos pelo id e armazenando numa variavel 2
  let ano = document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo = document.getElementById('tipo')
  let descricao = document.getElementById('descricao')
  let valor = document.getElementById('valor')

  //pegando os valores e armazenando numa variavel -3

  //4 - guardando os valores numa instacia da classe
  let despesa = new Despesa(
    ano.value,
    mes.value,
    dia.value,
    tipo.value,
    descricao.value,
    valor.value
  )

  if(despesa.validarDados()) {//12

    db.gravar(despesa)//6 - gravaçao do objeto no localstorage

    document.getElementById('modal_titulo').innerHTML = 'Registro inserido com sucesso'
    document.getElementById('modal_titulo_div').className = 'modal-header text-success'
    document.getElementById('modal_conteudo').innerHTML = 'Despesa foi cadastrada com sucesso'
    document.getElementById('modal_btn').innerHTML = 'Voltar'

    document.getElementById('modal_btn').className = 'btn btn-success'

    $('#modalRegistraDespesa').modal('show')
  }else {
    document.getElementById('modal_titulo').innerHTML = 'Erro na inclusao do registro'
    document.getElementById('modal_titulo_div').className = 'modal-header text-danger'
    document.getElementById('modal_conteudo').innerHTML = 'Erro na gravacao, verifique se todos os campos foram preenchidos correctamente'
    document.getElementById('modal_btn').innerHTML = 'Voltar e corrigir'

    document.getElementById('modal_btn').className = 'btn btn-danger'



    $('#modalRegistraDespesa').modal('show')

  }
}

function carregaListaDespesa() {
  //colocando todos os itens da despesa no array
  let despesas = Array()

  despesas = db.recuperaTodosRegistros()

  //criando elementos de forma programatica
  let listaDespesas = document.getElementById("listaDespesas")

  despesas.forEach(function(d){

    //criando a linha
    let linha = listaDespesas.insertRow()

    //criando as colunas
    linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`
    
    //retornando o tipo no formato de string
    switch(d.tipo) {
      case '1': d.tipo = 'Alimentaçaõ'
      break
      case '2': d.tipo = 'Educação'
      break
      case '3': d.tipo = 'Lazer'
      break
      case '4': d.tipo = 'Saúde'
      break
      case '5': d.tipo = 'Transporte'
      break
    }
    linha.insertCell(1).innerHTML = d.tipo
    linha.insertCell(2).innerHTML = d.descricao
    linha.insertCell(3).innerHTML = d.valor
  })
  
}
