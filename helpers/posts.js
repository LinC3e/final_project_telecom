const express = require('express')
const slugify = require('slugify')
const { faker } = require('@faker-js/faker')

const generatePost = () => {
    const post = {
        title: faker.lorem.words(6) ,
        body: faker.lorem.sentence(12),
        /* slug: slugify(faker.lorem.paragraph().toLowerCase()) ,  */
    }

    return post
    //console.log(post)
}

module.exports = {
    generatePost
}

