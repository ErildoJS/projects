import express from "express"

const app = express()

app.get("/", (request, response) => {
    response.send("ok")
})

app.all("/all", (request, response) => {
    response.send(request.method)
})

app.get("/teste?", (request, response) => {//a ultima letra é opcional
    response.send("teste?")
})

app.get("/buxx+", (request, response) => {//aumenta a ultima letra
    response.send("buxx+")
})

app.get("/one*two", (request, response) => {//consigo colocar mais palavras entre as duas palavras
    response.send("ok")
})

app.get("/test(ing)?", (request, response) => {//
    response.send("ok")
})

//next
app.get("/mult", (request, response) => {//
    next()
}, (request, response) => {
    response.end('')
})

app.listen(3333, () => {
    console.log("API running")
})