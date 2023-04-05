const router = require('express').Router()
const {Post, Comment, User}  = require('../models')

router.get ('/', async (req, res) => {
try {
const posts = await Post.findAll({
    include: [User]
})
res.render('homepage', posts)
} catch(err) {
res.json(err)
}
})

module.exports = router 