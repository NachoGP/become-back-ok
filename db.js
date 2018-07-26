//GESTOR Y MANEJADOR DE CONEXIONES A LA BBDD.

//La variable 'pool' es la que contiene todas las conexiones a la bbdd

//El metodo connect realiza la conexion a la bbdd y SOLO SE EJECUTA UNA UNICA VEZ. SE ejecuta en el fichero 'www'.

// El metodo get recupera la conexión a la BBDD. Lo llamamos cada vez que queramos hacer una query o consulta. 

let mysql = require('mysql')
let pool = null

exports.connect = (done) => {

   pool = mysql.createPool({


       host: 'eu-cdbr-west-02.cleardb.net',
       user: 'ba29a8b5d08178',
       password: 'fbee648d',
       database: 'heroku_2f0358899af0ed5'



   })
   done()

}

exports.get = () => {
   return pool
}

// EJEMPLO
//mysql://bed9bcd6c6ce65:2b658634@eu-cdbr-west-02.cleardb.net/heroku_9ce11891757ecf7?reconnect=true
/**
 *       // host: 'eu-cdbr-west-02.cleardb.net',
      // user: 'bed9bcd6c6ce65',
      // password: '2b658634',
      // database:  'heroku_9ce11891757ecf7'
 * 
 * 
 * mysql://b9c9457871ff97:010520ba@eu-cdbr-west-02.cleardb.net/heroku_cf0534b434c52eb?reconnect=true
 * NUEVA!   https://becomeawriter.herokuapp.com/
 *   host: eu-cdbr-west-02.cleardb.net
 * user: b9c9457871ff97
 * password: 010520ba
 * database: heroku_cf0534b434c52eb
 * 
 * 
 *      // host: 'localhost',
      // user: 'root',
      // password: 'root',
      // database: 'becomeawriter', //SCHEMA
      // port: '8889',
      // multipleStatements: true


//La dase de datos Migrating an existing database to ClearDB de Heroku, la segunda.
mysql://ba29a8b5d08178:fbee648d@eu-cdbr-west-02.cleardb.net/heroku_2f0358899af0ed5?reconnect=true

       host: 'eu-cdbr-west-02.cleardb.net',
       user: 'ba29a8b5d08178',
       password: 'fbee648d',
       database: 'heroku_2f0358899af0ed5'

 * 
 * 
 * 
 */
//postgres://ubxvpazkhehuww:4a4c21973b7fcdc5024df849b0198a7fefe49eafab8ea3c48807f93874f98835@ec2-54-228-251-254.eu-west-1.compute.amazonaws.com:5432/d8gpqcsdrrd80c

// host: 'ec2-54-228-251-254.eu-west-1.compute.amazonaws.com',
// user: 'ubxvpazkhehuww',
// password: '4a4c21973b7fcdc5024df849b0198a7fefe49eafab8ea3c48807f93874f98835',
// database: 'd8gpqcsdrrd80c'
