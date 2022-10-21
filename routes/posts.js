const express = require('express')
const Post = require('../models/posts')
const routerPost = express.Router()

routerPost.get('/posts', async (req,res) => {
    try {
        
        const posts = await Post.find({})

        res.render('get',
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