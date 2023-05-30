const express = require('express')

const { loginUser, signupUser } = require('../controllers/users')

const router = express.Router()

// Login route
router.post('/login', loginUser)

// Signup route

router.post('/signup', signupUser)

module.exports = router