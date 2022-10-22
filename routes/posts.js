const express = require('express')
const Post = require('../models/posts')
const routerPost = express.Router()

routerPost.get('/posts', async (req,res) => {
    try {
        
        const posts = await Post.find({}).lean()// Me deja un obj puro de js
        console.log(posts)

        const title = "Listado de Post"

        res.render('index',
            {
                title,
                posts
            }
        )
    } catch (error) {
        console.log(error)
    }
})


module.exports = {
    routerPost
}