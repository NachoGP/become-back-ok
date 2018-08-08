//GESTOR Y MANEJADOR DE CONEXIONES A LA BBDD.

//La variable 'pool' es la que contiene todas las conexiones a la bbdd

//El metodo connect realiza la conexion a la bbdd y SOLO SE EJECUTA UNA UNICA VEZ. SE ejecuta en el fichero 'www'.

// El metodo get recupera la conexión a la BBDD. Lo llamamos cada vez que queramos hacer una query o consulta. 

let mysql = require('mysql')
let pool = null

exports.connect = (done) => {

   pool = mysql.createPool({

    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'bcd63676642bea',
    password: '81310650',
    database: 'heroku_c1a2804237e8af0'

   })
   done()

}

exports.get = () => {
   return pool
}

//mysql://bcd63676642bea:81310650@eu-cdbr-west-02.cleardb.net/heroku_c1a2804237e8af0?reconnect=true

//  * NUEVA!   https://becomeawriter.herokuapp.com/
//  *   host: 'eu-cdbr-west-02.cleardb.net',
//  * user: 'b9c9457871ff97',
//  * password: '010520ba',
//  * database: 'heroku_cf0534b434c52eb'
//  * 
//  * La Local mia: 
      // host: 'localhost',
      // user: 'root',
      // password: 'root',
      // database: 'becomeawriter', //SCHEMA
      // port: '8889',
      // multipleStatements: true


//mysql://bc33e1bf8619d1:fb4809af@eu-cdbr-west-02.cleardb.net/heroku_aef5356e7008128?reconnect=true
//la que pasamos de prueba con M. a bawriter: 

    //    host: 'eu-cdbr-west-02.cleardb.net',
    //    user: 'bc33e1bf8619d1',
    //    password: 'fb4809af',
    //    database: 'heroku_aef5356e7008128'


//https://git.heroku.com/becomeawriter.git

//https://beco-me.herokuapp.com/