import User  from '../models/User'

module.exports = {
    async store(req, res) {
       //pegar o email do user
       const {email} = req.body

       //fazendo verificacao para trazer validar o user atraves do email
       let user = User.findOne({email})/**findOne - busca pelo email, find - busca pelo id */
        //const user = await User.create({email})

        //se nao encontrar o user eu vou criar um user
        //mas se encontrar eu vou salvar na variavel user
        if(!user) {
            user = await User.create({email})
        }

        return res.json(user)
    }
}