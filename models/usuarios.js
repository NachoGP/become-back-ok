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

