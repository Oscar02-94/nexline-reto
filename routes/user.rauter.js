const { Router } = require('express');


const {  CreateUser } = require('../controllers/user.controllers')

const routes = Router();


routes.post('/addUser', CreateUser );











module.exports = routes