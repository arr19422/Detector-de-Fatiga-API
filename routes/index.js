// 'use strict'

const express = require('express')
const api = express.Router()

const TravelController = require('../controllers/TravelController')
const UserController = require('../controllers/UserController')

api.get('/', (request, response) => {
    console.log('llega')
    response.json({ info: 'Node.js, Express, and Postgres API' })
})


//User
api.post('/user/login/', UserController.loginUser)
api.post('/user/register/', UserController.registerUser)
api.get('/user/getAllUsers/', UserController.getUsers)

//Travel
api.post('/travel/start/', TravelController.startTravel)
api.post('/travel/finish/', TravelController.finishTravel)

module.exports = api
