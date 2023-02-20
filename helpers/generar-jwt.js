
const jwt = require('jsonwebtoken');

const generarJWT = ( id ) => {

  return new Promise( (resolve, reject) => {

    const payload = { id };
    console.log(payload,'payload')

    jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {

      expiresIn: '4h'

    },(err, token) => {

      if (err) {

        console.log(err)

        reject( 'No se pudo generar el token' )

      }else{

        resolve( token )
      }
    })

  })
}



module.exports = {
  generarJWT
}




// const jwt = require('jsonwebtoken');

// const generateToken = (user_id) => {
// 	const token = jwt.sign(
// 		{
// 			user_id,
// 		},
// 		process.env.SECRETORPRIVATEKEY,
// 		{ expiresIn: '4h' }
// 	);

// 	return token;
// };

// function validate(token, cb) {
// 	try {
// 		const decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
// 		if (decoded) {
// 			return cb(decoded, null);
// 		}

// 		return cb(null, null);
// 	} catch (err) {
// 		return cb(null, err);
// 	}
// }

// module.exports = {
// 	generateToken,
// 	validate,
// };
