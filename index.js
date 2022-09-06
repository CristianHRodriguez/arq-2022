//importar modulos
const express = require('express')
//giardar ejecucion de express
const app = express()

//obtener info del sistema operativo -> variables de entorno -> PUERTO
console.log(process.env.PORT)
//escuchar del puerto #
app.listen(process.env.PORT || 3000)
console.log('Server on port',process.env.PORT || 3000)