import Booking from '../models/Booking'
module.exports = {
    async store(req, res) {//criaçao de um novo booking
        //buscando user logado
        const {user_id} = req.headers

        //buscando o id do spot pertencente ao user acima
        const {spot_id} = req.params

        const {date} = req.body

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })

        await booking.populate('spot').populate('user')//popular = chamar ou mostrar os dados restantes desses models
        return res.json(booking)

    }
}