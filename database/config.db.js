const {createPool} = require('mysql2/promise')

module.exports =  pool = createPool({
  host: process.env.HOST_DB,
  user:process.env. USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB
})

console.log( 'conexion con la base de datos establecida' )



