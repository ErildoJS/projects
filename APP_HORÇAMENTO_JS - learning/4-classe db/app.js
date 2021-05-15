class Despesa {
  constructor(ano, mes, dia, descricao, tipo, valor) {
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
  }
}

class Bd {
  constructor() {
    //criando o id principal

    let id = localStorage.getItem('id')

    //se nao existir o id eu set um valor inicial
    if(id === null) {
      localStorage.setItem('id', 0)
    }
  }

  getProximoId(){
    //
    let proxiomoId = localStorage.getItem('id')
    return parseInt(proxiomoId) + 1
  }
  gravar(d) {
    //pegando o proximo id
    let Id = this.getProximoId()
    localStorage.setItem(Id, JSON.stringify(d))
    localStorage.setItem('id', Id)
  }
}

let bd = new Bd()

function cadastrarDespesa() {
  let ano = document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo = document.getElementById('tipo')
  let descricao = document.getElementById('descricao')
  let valor = document.getElementById('valor')

  let despesa = new Despesa(ano.value, mes.value, dia.value, descricao.value , tipo.value, valor.value)
  
  //salvando no localstorage
  bd.gravar(despesa)
}



