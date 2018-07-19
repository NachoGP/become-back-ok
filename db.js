//GESTOR Y MANEJADOR DE CONEXIONES A LA BBDD.

//La variable 'pool' es la que contiene todas las conexiones a la bbdd

//El metodo connect realiza la conexion a la bbdd y SOLO SE EJECUTA UNA UNICA VEZ. SE ejecuta en el fichero 'www'.

// El metodo get recupera la conexión a la BBDD. Lo llamamos cada vez que queramos hacer una query o consulta. 

let mysql = require('mysql')
let pool = null

exports.connect = (done) => {

   pool = mysql.createPool({

      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'becomeawriter', //SCHEMA
      port: '8889',
      multipleStatements: true

   })
   done()

}

exports.get = () => {
   return pool
}

// mysql://bed9bcd6c6ce65:2b658634@eu-cdbr-west-02.cleardb.net/heroku_9ce11891757ecf7?reconnect=true
/**
 *       // host: 'eu-cdbr-west-02.cleardb.net',
      // user: 'bed9bcd6c6ce65',
      // password: '2b658634',
      // database:  'heroku_9ce11891757ecf7'
 * 
 * 
 * 
 * host: eu-cdbr-west-02.cleardb.net
 * user: bed9bcd6c6ce65
 * password: 2b658634
 * database:  heroku_9ce11891757ecf7
 * 
 * 
*/
