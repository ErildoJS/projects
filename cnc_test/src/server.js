import express from 'express'
const server = express()
import routes from './routes'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://omnistack:iurd2016@cluster0-lb1cb.mongodb.net/aircnc_test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


server.use(express.json())
server.use(routes)
server.listen(3333)

/**
 * 1 - importar o mongoose
 *  2 - conectar com o db
 */