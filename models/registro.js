let db = require('../db')

exports.guardarUsuario = ({id, usuario, password, country, city, email}, done)=>{
   let consulta = 'INSERT INTO usuarios (id, usuario, password, country, city, email) VALUES(?,?,?,?,?,?)'
    db.get().query(consulta, [id, usuario, password, country, city, email], (err,rows) =>{
 
       if(err) return done(err, null)
       done(null, rows)
    })
 
 }


 exports.guardarUsuarioKids = ({id, usuario, password, country, city, email}, done)=>{
  let consulta = 'INSERT INTO usuarioskids (id, usuario, password, country, city, email) VALUES(?,?,?,?,?,?)'
   db.get().query(consulta, [id, usuario, password, country, city, email], (err,rows) =>{

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

exports.AccesoUsuarioKids = (usuario,done) => { 
  let consulta = "SELECT * FROM usuarioskids WHERE usuario = ?"
   db.get().query(consulta, [usuario],(err,rows) =>{

     if(err) return done(err, null)
     done(null, rows)

  })
}