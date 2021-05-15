import mongoose from 'mongoose'

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default mongoose.model('Spot', SpotSchema)


/** 1 - importar o mongoose
 * 2 - criar o esquema - que sao todos os campos obrigatorios que o user vai ter na hora de cadastrar
 */