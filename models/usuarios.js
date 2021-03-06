//Representa las acciones contra la tabla de usuarios

let db = require('../db')

//Todos los usuarios de la tabla usuarios

exports.index = (done) => { 

   db.get().query('SELECT * FROM usuarios', (err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)

   })
}
//Del usuario u todos sus relatos y sus datos de usuario

exports.show = (id, done)=>{
   //lanzo la sentencia
   db.get().query('SELECT * FROM usuarios u, relatos r WHERE u.id = r.usuario_id AND u.id=?', [id],(err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)

   })

}



//Nº total de Paises diferentes que son Becomer´s
exports.ncountryTotal = (done)=>{
   //lanzo la sentencia:
   //Nº de relatos de la categoria Sin-Limite(1000) por autor (id)
   db.get().query('SELECT COUNT(DISTINCT country) as totalpaises FROM usuarios',(err,rows)=>{
 
      if(err) return done(err, null)
      done(null, rows)
   })
 
 }

 //Nº total de Paises diferentes que son Becomer´s
exports.ncountryTotalKids = (done)=>{
  //lanzo la sentencia:
  //Nº de relatos de la categoria Sin-Limite(1000) por autor (id)
  db.get().query('SELECT COUNT(DISTINCT country) as totalpaises FROM usuarioskids',(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}

