//create instructors
const fs = require('fs')
const data = require('./data.json')
const {age} = require('./util')
exports.show = (req, res) => {
    const {id} = req.params

    const foundInstructor = data.instructors.find((instructor) => {
        if(id == instructor.id) {
            return true
        }
    })

    if (!foundInstructor) {
        return res.send('Instructor not found')
    }

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        gender: "",
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat("pt-Br").format(foundInstructor.created_at)
    }
    return res.render('instructors/show', {instructor: foundInstructor})
}

exports.edit = (req, res) => {
    const {id} = req.params

    const foundInstructor = data.instructors.find((instructor) => {
        if(id == instructor.id) {
            return true
        }
    })

    if (!foundInstructor) {
        return res.send('Instructor not found')
    }
    return res.render('instructors/edit', {instructor: foundInstructor})
}
exports.post = (req, res) => {
    //validando todos campos
    const keys = Object.keys(req.body)//retornando apenas as chaves
    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('preencha todos os campos')
        }

    }
    let {avatar_url , birth,  gender, services, name} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.instructors.length + 1)
    
    
    data.instructors.push({id, avatar_url, name, birth, gender, services, created_at})//adicionando os dados no array


    //salvando os dados num arquivo
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('write file error')

        return res.redirect('/instructors')
    })

    //return res.send(req.body)
}