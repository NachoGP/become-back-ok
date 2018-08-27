//GESTOR Y MANEJADOR DE CONEXIONES A LA BBDD.

//La variable 'pool' es la que contiene todas las conexiones a la bbdd

//El metodo connect realiza la conexion a la bbdd y SOLO SE EJECUTA UNA UNICA VEZ. SE ejecuta en el fichero 'www'.

// El metodo get recupera la conexión a la BBDD. Lo llamamos cada vez que queramos hacer una query o consulta. 

let mysql = require('mysql')
let pool = null

exports.connect = (done) => {

   pool = mysql.createPool({
    host: 'eeu-cdbr-west-02.cleardb.net',
    user: 'b4e20df1d3d4a4',
    password: '6c19876a',
    database: 'heroku_492ee879f51fed6'

   })
   done()

}

exports.get = () => {
   return pool
}
//https://becomewriter.herokuapp.com/
