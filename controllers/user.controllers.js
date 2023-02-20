
const pool = require('../database/config.db')

const bcrypt = require('bcryptjs')


const CreateUser = async (req, res) => {

  let { userName, password, fullname } = req.body
  
  // encriptando la contraseña
  const salt = bcrypt.genSaltSync();
  password = bcrypt.hashSync(password, salt)
 

  // guardar en base de datos
  const [rows] = await pool.query('INSERT INTO users (userName, password, fullname) VALUES (?,?,?)',
  [userName, password, fullname ])

  res.json(rows)

}


module.exports = {
  CreateUser
}