const Spot = require('../models/Spot') 

module.exports = {
    async store(req, res) {
        //buscar as info que vou querer para criar um spot
        const {filename} = req.file

        const {company, techs, price} = req.body

        //pegando o id do user que pertence o spot
        const {user_id} = req.headers

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),//transformando o techs em array e eliminando os espaços em branco
            price

        })

        return res.json(spot)
    } 
}