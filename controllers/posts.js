const Post = require('../models/posts')

const getPosts = async (req,res) => {
    try {
        
        const posts = await Post.find({}).lean()// Me deja un obj puro de js
        console.log(posts)

        const title = "Listado de Post"

        res.status(200).render('index',
            {
                title,
                posts
            }
        )
    } catch (error) {
        console.log(error)
    }
}

module.exports = { 
    getPosts
}