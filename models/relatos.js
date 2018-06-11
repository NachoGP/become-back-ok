//Representa las acciones contra la tabla de relatos

let db = require('../db')



exports.mostrarRelatosOrdenados = (done)=>{
   //lanzo la sentencia:
   //Todos los relatos ordenados con fechas descencientes. (sección "Ultimos Relatos" publicados)
   db.get().query('SELECT r.id, r.titulo, r.categoria, r.relato, r.fecha, u.usuario FROM relatos r, usuarios u WHERE r.usuario_id = u.id order by fecha DESC',(err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)

   })


}

exports.todosRelatos = (done)=>{
   //lanzo la sentencia:
   //Todos los relatos por autor (id)
   db.get().query('SELECT r.id, r.titulo, r.categoria, r.relato, r.fecha, u.usuario FROM relatos r, usuarios u WHERE r.usuario_id = u.id AND r.usuario_id = 1',(err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })

}

exports.mostrarRelatosporUsuario = (id, done)=>{
   //lanzo la sentencia:
   //el relato que corresponde a un id
   db.get().query('SELECT COUNT(*) as total FROM relatos WHERE usuario_id =?', [id], (err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })
}

exports.mostrarRelato = (id, done)=>{
   //lanzo la sentencia:
   //el relato que corresponde a un id
   db.get().query('SELECT * from relatos where id=?',[id], (err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })

}
