const express = require('express');

const app = express();

const cors = require('cors')

const {knex} = require('../database/config.db')

class Server {

  constructor() {

    this.app = express();
    
    this.port = process.env.PORT

    // rutas de los usuarios
    this.authPath = '/api/auth'
    this.usuariosPath = '/api/usuarios'
    this.tareasPath = '/api/tareas'
    

    // conectar a base de datos
    // this.conectarDB();

    // middelware
        
    this.middlewares();

    // rutas de mi aplicacion
    this.routes();
  }

  middlewares() {

    this.app.use( express.static('public') ); // directorio publico ruta

    this.app.use(cors() ); // configurando el cors

    this.app.use( express.json() ); // lectura y parseo del body
  }

  // async conectarDB() {
  //   await dbConnetion()

  // }

  routes() {
    // configurando la ruta de los routes
    this.app.use( this.authPath, require('../routes/auth.rauter'));
    this.app.use( this.usuariosPath, require('../routes/user.rauter'));
    this.app.use( this.tareasPath, require('../routes/tarea.rauter'));
    
  }
  // levantar el servidor
  listener() {

    this.app.listen(this.port, () => {

      console.log(`App listening on port ${this.port}`)

    });
  }

}

module.exports = Server