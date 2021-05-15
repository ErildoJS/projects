const User = require('../models/User')
const Spot = require('../models/Spot')
//logica para criarum controller de sessao do modo mais basico
module.exports = {
    async index(req, res) {//metodo para listar os spots criados por categoria(//criando filtro por tecnologia)

        //buscando as querys
        const {tech} = req.query

        //listando os spots apenas da tecnologia que eu passar no query
        const spots = await Spot.find({techs: tech})//techs = nome do campo e tech = valor que passei no query(nome da technologia)

        return res.json(spots)
        

    },

  async store(req, res) {//metodo para criar um spot
      const {filename} = req.file//buscando o file onde esta a thumbnail

      const {company, price, techs} = req.body//pegando o restante dos conteudos do body

      const {user_id} = req.headers//pegando o id do controller User

      const user = await User.findById(user_id)//pesquisando pela existencia do id que vem do headers

      
      if (!user ) {//se nao existir o id , quer dizer que nao tem um user, entao nao posso criar o spot
          return res.status(400).json({error: 'user does not exists'})
      }
      //criar um spot de um respetivo User
      const spot = await Spot.create({
          user: user_id,
          thumbnail: filename,
          company,
          price,
          techs: techs.split(',').map(tech => tech.strim())//transformando as techs em array com virgulas
          
      })


      
      return res.json(spot)
  }
}