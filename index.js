//importar modulos
const express = require('express')
//giardar ejecucion de express
const app = express()
//llama el pool del modulo
const {pool} = require('./pg')

//->obtener info del sistema operativo -> variables de entorno -> PUERTO
console.log(process.env.PORT)
//->enviar a pantalla un mensaje
app.get('/', (req,res) => res.send("Hello word"))
//->para trabajar paginas estaticas
//app.use(express.static('public')) //donde public es la carpeta que contiene los archivos web

//uso base de datos -> crear ruta -> hacer ping
//asincronico async // const para obtener y guardar un dato
//res.send -> envia una respuesta
app.get('/ping', async(req, res) => {
    const respuesta = await pool.query(`/*funcion()*/`)
    res.send({
        message: respuesta
    })
})

//escuchar del puerto #
app.listen(process.env.PORT || 3000) //
console.log('Server on port', process.env.PORT ||  3000) //process.env.PORT || 