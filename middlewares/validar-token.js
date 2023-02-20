const jwt = require('jsonwebtoken')

const  pool  = require('../database/config.db')

// validando token
const validarJWT = async (req, res, next ) => {

  const token = req.header('x-token')

  if( !token ) {

    return res.status(401).json({
      smg: 'no hay un token en la peticion'
    })
  }


  try {

   const { id }  = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

   //leer el usuario que corresponde al id
   const [usuario] = await  pool.query('SELECT * FROM users WHERE id = ?',[id])
   console.log(usuario,'===>')
   

   req.user = {
    user_id: id
   }
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({
      smg:'token no valido'
    })
  }

  
}


module.exports = { validarJWT }