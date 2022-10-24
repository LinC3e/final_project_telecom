const Post = require('../models/posts')


// Index
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

// Show 

const showPost = async (req,res) => {
    try {
        const post = await Post.findOne({ slug : req.params.slug }).lean()
        if(post === null) res.redirect('/')

        res.render('show', {
            title: `Post | ${post.title}`,
            post
        })
    } catch (error) {
        console.log("Error Show")
    }
}

module.exports = { 
    getPosts,
    showPost
}