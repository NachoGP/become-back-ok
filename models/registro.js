let db = require('../db')

exports.guardarUsuario = ({id, usuario, password, country, city}, done)=>{
   let consulta = 'INSERT INTO usuarios (id, usuario, password, country, city) VALUES(?,?,?,?,?)'
    db.get().query(consulta, [id, usuario, password, country, city], (err,rows) =>{
 
       if(err) return done(err, null)
       done(null, rows)
    })
 
 }

 exports.AccesoUsuario = (usuario,done) => { 
   let consulta = "SELECT * FROM usuarios WHERE usuario = ?"
    db.get().query(consulta, [usuario],(err,rows) =>{

      if(err) return done(err, null)
      done(null, rows)

   })
}