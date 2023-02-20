# nexline-reto
Sistema de gestión de tareas
# NEXTLINE RETO

El Api-Rest está creada para trabajar con las tecnologías Node.js con su framework para backend express, MySQL como base de datos para este proyecto.


## Estructura del proyecto

El proyecto se compone de la siguiente manera.
reto-nexline
	
1. reto-nexline
   * contollers
	   * auth.contollers.js
	   * tareas.contollers.js
	   * user.controllers.js
   * database
	   * config.db.js
   * helpers
	   * generar-jwt.js
   * middlewares
		* validar-tokens.js
   * modules
	   * server.js
   * routes
	   * auth.rauter.js
	   * tareas.rauter.js
	   * user.rauter.js
	* app.js

Instalamos las dependencias con un  **npm install**


## END-POINTS

Se agregan las rutas usadas para testear la aplicación desde la herramienta **POSTMAN**.
```markdown
 			Host               | 	          End-points 
|------------------------------|-----------------------------------------------------------------|
| http://localhost:3000/api    |-----------------------------------------------------------------|
|------------------------------|-----------------------------------------------------------------|
| http://localhost:3000/api/tareas/addTareas   | End-point POST para agregar tareas              |
|------------------------------|---------------|-------------------------------------------------|
| http://localhost:3000/api/tareas/getTareas   | End-poit GET para traer todas las tareas        |
|------------------------------|---------------|-------------------------------------------------
| http://localhost:3000/api/tareas/getTarea    | End-point GET para traer una sola tarea         |
|------------------------------|---------------|-------------------------------------------------
| http://localhost:3000/api/tareas/deleteTareas| End-point DELETE para borrar tarea              |
|------------------------------|---------------|-------------------------------------------------|
| http://localhost:3000/api/tareas/updateTarea | End-point UPDATE para actualizar una sola tarea
|------------------------------|---------------|-------------------------------------------------|
| http://localhost:3000/api/usuarios/addUser   | End-point POST para Crear un usuario
|------------------------------|---------------|-------------------------------------------------|
| http://localhost:3000/api/auth/login         | End-point POST para iniciar sesion
|------------------------------|---------------|-------------------------------------------------|


```
