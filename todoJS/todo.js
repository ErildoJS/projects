var listElement = document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")

var todos = [
  'Estudar nodejs',
  'Estudar reactjs',
  'Estudar react native',
]

function renderTodos() {
  //excluir o conteudo antes de receber o novo
  listElement.innerHTML = ''
  for(todo of todos) {//esse for é especifico pra arrays
    var todoElement = document.createElement('li')//criando o li
    var todoText = document.createTextNode(todo)//criando o texto

    todoElement.appendChild(todoText)//add o texto dentro do li

    listElement.appendChild(todoElement)//add o li ja com o texto

    //feature de add new todo


  }
}

renderTodos()

function addTodo() {
  //pegando o valor do input
  var todoText = inputElement.value

  //add o texto no array
  todos.push(todoText)

  //apago o texto actual do input
  inputElement.value = ''

  renderTodos()
}

buttonElement.onclick = addTodo