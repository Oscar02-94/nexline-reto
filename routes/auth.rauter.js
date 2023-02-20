const { Router } = require('express');

const { login } = require('../controllers/auth.controllers')

// const { validarJWT } = require('../middlewares/validar-token')



const routes = Router();


routes.post('/login', login )

module.exports = routes