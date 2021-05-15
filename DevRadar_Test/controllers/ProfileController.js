import Spot from '../models/Spot'

module.exports = {
    async show(req, res) {
        //fazer a listagem dos spots do user logado
        //buscando id do user logado
        const {user_id} = req.headers
        const spots = await Spot.find({user: user_id})

        return res.json(spots)
    }
}