//GESTOR Y MANEJADOR DE CONEXIONES A LA BBDD.

//La variable 'pool' es la que contiene todas las conexiones a la bbdd

//El metodo connect realiza la conexion a la bbdd y SOLO SE EJECUTA UNA UNICA VEZ. SE ejecuta en el fichero 'www'.

// El metodo get recupera la conexión a la BBDD. Lo llamamos cada vez que queramos hacer una query o consulta. 

let mysql = require('mysql')
let pool = null

exports.connect = (done) => {

   pool = mysql.createPool({

       host: 'eu-cdbr-west-02.cleardb.net',
       user: 'bb1a389a97efc82',
       password: '923f4a71',
       database: 'heroku_619f90e99c56a7c'

   })
   done()

}

exports.get = () => {
   return pool
}

//nueva revisada con M.G. para bawriter2: 

//mysql://b1a389a97efc82:923f4a71@eu-cdbr-west-02.cleardb.net/heroku_619f90e99c56a7c?reconnect=true


//  * NUEVA!   https://becomeawriter.herokuapp.com/
//  *   host: 'eu-cdbr-west-02.cleardb.net',
//  * user: 'b9c9457871ff97',
//  * password: '010520ba',
//  * database: 'heroku_cf0534b434c52eb'
//  * 
//  * La Local mia: 
 *      // host: 'localhost',
      // user: 'root',
      // password: 'root',
      // database: 'becomeawriter', //SCHEMA
      // port: '8889',
      // multipleStatements: true


//la que pasamos de prueba con M. a bawriter: 

    //    host: 'eu-cdbr-west-02.cleardb.net',
    //    user: 'bc33e1bf8619d1',
    //    password: 'fb4809af',
    //    database: 'heroku_aef5356e7008128'


//https://git.heroku.com/becomeawriter.git

//https://beco-me.herokuapp.com/