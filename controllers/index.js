const { generatePost } = require("../helpers/posts")
const { statusModel } = require("../models")

const getRootController =  (req,res) => {
    // Test
    generatePost()
    res.status(200).send(statusModel)
}

module.exports = {
    getRootController
}