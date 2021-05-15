const User = require('../models/User')
module.exports = {
    async store(req, res) {
        //pegando email do user
        const {email} = req.body

        //criando um user
        const user = await User.create({email})

        return res.json(user)
    }
}