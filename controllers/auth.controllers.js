
const  pool  = require('../database/config.db');

const  { generarJWT }  = require('../helpers/generar-jwt');


const login = async (req, res) => {

  const { userName } = req.body;

  try {

    // verificar si el correo existe
    const [username] = await pool.query('SELECT  id  FROM users WHERE  userName = ? ',[userName])
      
    if( username.length === 0 ) {
      return res.status(400).json({msg:'El correo/contraseña son incorrectos'})
    }

    
    // Generar el Jwt
      const token = await generarJWT( username[0].id ) 


    res.json({
      username,
      token
    })

  } catch (error) {
    console.log(error)
    return res.status(5000).json({
      msg:'Algo salio mal'
    })
  }

}

module.exports = {
  login
}