const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)//real time
mongoose.connect('mongodb+srv://omnistack:iurd2016@cluster0-lb1cb.mongodb.net/instaupload?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use((req, res, next) => {
    req.io = io
  
    next()
})

app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
app.use(express.json())
app.use(routes)

server.listen(3333)