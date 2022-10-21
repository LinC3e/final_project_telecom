const express = require('express')
const { generatePost } = require('../helpers/posts')
const routerDev = express.Router()
const Post = require('../models/posts')


// TODO : Llevar esto a un controlador
routerDev.get('/db/fresh', async (req,res) => {
    try {

        /* const posts = await Post.deleteMany()
        console.log(posts) */

        for(let i = 0; i< 10 ;i++){
            const nuevoPost = generatePost()
            const post = new Post(nuevoPost)
            await post.save()
        } 
        res.send("ok")

    } catch (error) {
        console.log(error)
        res.send("Error")
    }
})

module.exports = {
    routerDev
}