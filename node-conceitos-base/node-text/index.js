const express = require('express')

const server = express()

server.use(express.json())

const users = ['erildo', 'patricio', 'francisco']

server.get('/users', (req, res) => {
  return res.json(users)
})

server.get('/users/:index', (req, res) =>{
  /**
   * const name = req.query.name - query params
   * const id = req.params.id - route params
   */
  const {index} = req.params

  return res.json(users[index])
});

server.post('/users', (req, res) => {
  const {name, email, passwd} = req.body

  users.push(name)

  return res.json(users)
})

server.put('/users/:index', (req, res) => {
  const {index} = req.params
  const {name} = req.body

  users[index] = name

  return res.json(users)
})

server.delete('/users/:index', (req, res) =>{
  const {index} = req.params

  users.splice(index, 1)

  return res.send()
})
server.listen(3333)