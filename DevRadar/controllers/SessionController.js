const User = require('../models/User')
module.exports = {
    async store(req, res) {
        //pegando email do user
        const {email} = req.body

        //criando um user so se ele nao existir, se ele existir eu retorno o mesmo
        let user = await User.findOne({email})

        if(!user) {
            user = await User.create({email})
        }

        return res.json(user)
    }
}