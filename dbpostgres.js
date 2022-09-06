//importar el modulo
const {Pool} = require('pg')

//genera un pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL || POSTGRES_URL, //"postgres://hxwtxrmwlrjppd:0a8d45cc3bd3a042c21562076e7e8cb1e2221448b95102eac4174fd6cc766b7a@ec2-107-23-76-12.compute-1.amazonaws.com:5432/dd7ph9cc2v59sp"
    ssl: {
        rejectUnauthorized: false //para que no impida la conexion segura
    }
})

//exporta
module.exports = {
    pool
}