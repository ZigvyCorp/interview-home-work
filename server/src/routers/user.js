const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/users', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body

        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Đăng nhập thất bại'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).json({error})
    }

})

router.post('/users/all', async(req,res) => {
    User.find({},'email name _id',(error, users) => {
        if(error) return res.status(400).json({error})
        res.status(200).json({users})
    })
})

router.post('/user/:id', async(req, res) => {
    
    await User.findById(req.params.id).exec((error, user) => {
        if(error) res.status(400).json({error})
        res.status(200).json({
            user: {name: user.name, email: user.email}
        })
    })

})

router.get('/users/me', auth, async(req, res) => {
    // View logged in user profile
    res.send(req.user)
})

router.post('/users/change_password', auth, async(req, res) => {
    let new_password = (req.body.password) ? req.body.password : null;
    User.findById(req.user._id, (error, user) => {
        if(error) res.status(400).json({error})
        if(new_password)
        {
            user.password = new_password;
            user.save().then(post => {
                res.status(200).json({"password_updated": true}, user)
            }).catch(error => {res.status(400).json({error})}) 
        }
        res.status(400).json({error: "password must have"})

    })
})

router.post('/users/me/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async(req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router