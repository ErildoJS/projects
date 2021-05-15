const Post = require('../models/Post')

module.exports = {
   //criando um like
    async store(req, res) {
        //buscando o id de um user que vem apartir da rota 
        const post = await Post.findById(req.params.id)
        
        post.likes += 1
        
        post.save()

        req.io.emit('like', post)

        return res.json(post)
    }
}