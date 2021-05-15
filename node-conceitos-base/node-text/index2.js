const express = require('express')

const api = express()
api.use(express.json())

const users = ['erildo', 'patricio', 'frnacisco']


api.get('/users', (req, res) => {
  return res.json(users)
})

api.get('/users/:index', (req, res) => {
  const {index} = req.params
  return res.json(users[index])
})


api.post('/users', (req, res) => {
  const {name} = req.body

  users.push(name)
  return res.json(users)
})

api.put('/users/:index', (req, res) => {
  const {index} = req.params
  const {name} = req.body

  users[index] = name
  return res.json(users)
})

api.delete('/users/:index', (req, res) => {
  const {index} = req.params

  users.splice(index, 1)
  return res.send()
})



api.listen(4444)