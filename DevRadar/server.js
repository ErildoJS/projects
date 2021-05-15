import express from 'express'
const app = express()
import routes from './routes'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://omnistack:iurd2016@cluster0-lb1cb.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(express.json())
app.use(routes)

app.listen(3333)