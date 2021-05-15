const express = require('express')

const server = express()

/**
 * middlewares - eh a base de toda aplicacao express, eh uma funcao que recebe res req e next e faz alguma coisa
 * middleware global - nao importa a rota que acessamos esse middleware sempre vai ser chamado
 * middleware local - aplicado directamente na rota
 * os middlewares podem alterar as variaveis req e res
 */
server.use(express.json())

const users = ['erildo', 'patricio', 'francisco']

//middleware global
server.use((req, res, next) => {
  console.time('request')
  console.log(`a requisiscao foi chamada, method ${req.method} e url ${req.url}`)
  next();
  console.timeEnd('request')
})

//middleware local
function checkUserExists(req, res, next) {
  if(!req.body.name) {
    return res.status(400).json({error: 'User name is required'})
  }

  return next()
}

//middleware para as rotas que recebem o user com parametro
//verificando a existencia de um indice no array users 
function checkUserInArray(req, res, next) {
  if(!users[req.params.index]) {
    return res.status(400).json({error: 'User does not exists'})
  }

  return next();
}

//mudando o valor do req com middlewares
function checkUserInArray2(req, res, next) {
  const user = users[req.params.index]
  if(!user) {
    return res.status(400).json({error: 'User does not exists'})
  }
  req.user = user

  return next();
}
server.get('/users', (req, res) => {
  return res.json(users)
})

server.get('/users/:index',checkUserInArray2, (req, res) =>{
  /**
   * const name = req.query.name - query params
   * const id = req.params.id - route params
   */
  //const {index} = req.params

  return res.json(req.user)//usando a variavel req.user  do middleware acima
});

server.post('/users', checkUserExists, (req, res) => {
  const {name, email, passwd} = req.body

  users.push(name)

  return res.json(users)
})

server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
  const {index} = req.params
  const {name} = req.body

  users[index] = name

  return res.json(users)
})

server.delete('/users/:index',checkUserInArray, (req, res) =>{
  const {index} = req.params

  users.splice(index, 1)

  return res.send()
})
server.listen(3333)