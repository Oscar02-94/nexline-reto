const { Router } = require('express');

const { getTareas, getTarea, createTarea, updateTarea, deleteTarea } = require('../controllers/tarea.controller')

const { validarJWT } = require('../middlewares/validar-token')

const routes = Router();

routes.get('/getTareas', validarJWT, getTareas)

routes.get('/getTarea/:id', getTarea)

routes.post('/addTarea', validarJWT, createTarea)

routes.put('/updateTarea/:id',validarJWT, updateTarea)

routes.delete('/deletTarea/:id',validarJWT, deleteTarea)


module.exports = routes