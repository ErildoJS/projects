import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import cors from 'cors'

mongoose.connect('mongodb+srv://omnistack:iurd2016@cluster0-lb1cb.mongodb.net/tinder_dev?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)