class Despesa {
  constructor(ano, mes, dia, descricao, tipo, valor) {
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.descricao = descricao
    this.tipo = tipo
    this.valor = valor
  }
}


function cadastrarDespesa() {
  let ano = document.getElementById('ano')
  let mes = document.getElementById('mes')
  let dia = document.getElementById('dia')
  let tipo = document.getElementById('tipo')
  let descricao = document.getElementById('descricao')
  let valor = document.getElementById('valor')
  let despesa = new Despesa(ano.value, mes.value, dia.value, descricao.value , tipo.value, valor.value)
  

  localStorage.getItem('id', JSON.stringify(despesa()))
  
}

