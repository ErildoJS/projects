import Dev from '../models/Dev'
module.exports = {
    async store(req,res) {
        //qual é o desenvolvedor que esta dando like em alguem
        const {user} = req.headers
        //qual o id do user que quero dar like
        const {devId} = req.params

        //buscar as 2 entidades salvas no db pra esses users(o model deles)
        const loggedDev = await Dev.findById(user)//id do user logado no db
        const targetDev = await Dev.findById(devId)//id do user qu vai receber o like

        //verificar se esta a dar like num user que nao existir, vai dar erro
        if(!targetDev) {
            return res.status(400).json({error: 'Dev not exists'})
        }


        //outra verificao para ver se o user que recebeu like po dar like no outro, e se isso acontecer retorna deu match
        //verifica se o targetDev.likes ja nao tem o array like
        if(targetDev.likes.includes(loggedDev._id)) {
            console.log('deu match')
        }

        //se deu certo , eu vou pegar o user logado e a informacao de likes no db
        loggedDev.likes.push(targetDev._id)//pego o campo likes e add o id do user que quero dar like

        //e depois salvo
        await loggedDev.save()

        return res.json(loggedDev)

    }
}