import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: String,
})

export default mongoose.model('User', UserSchema)


/** 1 - importar o mongoose
 * 2 - creiar o esquema - que sao todos os campos obrigatorios que o user vai ter na hora de cadastrar
 */