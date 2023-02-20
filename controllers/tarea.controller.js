
const pool = require('../database/config.db')


// Opteniendo las tareas del usuario
const getTareas = async (req, res) => {

  const { user_id } = req.user

  const [rows] = await pool.query('SELECT * FROM tasks WHERE user_id = ? AND active = 1 ',[user_id])
  res.json({
    rows
  })
}

// Opteniendo una sola tarea
const getTarea = async (req, res) => {
  
  const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?',[req.params.id])
  if (rows.length <= 0 ) return res.status(404).json({msg:'Tarea no encontrada'})

  res.json( rows[0] )
}

// Creando la tarea
const createTarea = async (req, res) => {

  const { user_id } = req.user

  const {
    title, 
    description, 
    completion_status, 
    delivery_date, 
    responsible, 
    comments 
  } = req.body

  const [rows] = await pool.query('INSERT INTO tasks (title, description,completion_status, delivery_date, responsible, comments, user_id) VALUES(?,?,?,?,?,?,?)',
  [title, description,completion_status, delivery_date, responsible, comments, user_id])

  
  res.json({
    id:rows.insertId,
    title, 
    description, 
    completion_status, 
    delivery_date,
    responsible, 
    comments,
    user_id 
  })
}

// Actualizando la tarea
const updateTarea = async (req, res) => {

  const { id } = req.params

  const {
    title, 
    description, 
    completion_status, 
    delivery_date, 
    responsible, 
    comments 
  } = req.body

  const [result] = await pool.query('UPDATE tasks SET title = ?, description = ?, completion_status = ?, delivery_date = ?, responsible = ?, comments = ? WHERE id = ?'
  ,[title, description, completion_status, delivery_date, responsible, comments, id])
  
  if(result.affectedRows === 0) return res.status(404).json({smg:'Tarea no encontrada'})

 const [rows]= await pool.query('SELECT * FROM tasks WHERE id = ?',[id])

  res.json( rows[0])

}

// borrando la tarea
const deleteTarea = async (req, res) => {

  try {
    const [ result ] = await pool.query(' DELETE FROM tasks WHERE id = ?',[req.params.id]) 
    
  if(result.affectedRows <= 0 ) return res.status(404).json({smg:'Tarea no encontrada'})
  
res.status(204).json({result})
  } catch (error) {
    console.log(error)
  }
 
}

module.exports = {
  getTareas,
  getTarea,
  createTarea,
  updateTarea,
  deleteTarea
}



