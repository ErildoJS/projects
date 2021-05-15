var listElement = document.querySelector('.app ul')//ul
var inputElement = document.querySelector('.app input')//input
var buttonElement = document.querySelector('.app button')//button

//armazenando os todos
var todos = [
    'Programar nodejs',
    'Programar ReactJS',
    'Programar React Native'

]

//renderizando todos em tela(dentro da lista)
//criar uma funçao que percorre todos os todos e renderiza em tela

function renderTodos() {
    listElement.innerHTML = ''
    //percorrendo todos
    for(todo of todos) {
        var todoElement = document.createElement('li')//li
        var todoText = document.createTextNode(todo)//texto do li

        var linkElement = document.createElement('a')

        linkElement.setAttribute('href', '#')
        
        var linkText = document.createTextNode('Excluir')
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText)//add o texto dentro do li
        todoElement.appendChild(linkElement)//add o a dentro da  li
        listElement.appendChild(todoElement)//add o li dentro da ul
    }
}


renderTodos()

//funcao de add todos
function addTodos() {
   
    //recuperar o valor do input
    var todoText = inputElement.value

    //add o valor no array de todos
    todos.push(todoText)


    //apagar o texto atual do input
    inputElement.value = ''
    renderTodos()
}

buttonElement.onclick = addTodos