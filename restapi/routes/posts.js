const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
    Post.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({
            message: err
        })
    }) 
})

router.post('/',(req,res) => {
    const post = new Post({
        username: req.body.username,
        password: req.body.password
    })

    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({
            message: err
        })
    })
})

module.exports = router;