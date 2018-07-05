//Representa las acciones contra la tabla de relatos

let db = require('../db')
exports.mostrarRelatosOrdenados = (done)=>{
   //lanzo la sentencia:
   //Todos los relatos ordenados con fechas descencientes. (sección "Ultimos Relatos" publicados)
   db.get().query('SELECT r.id, r.titulo, r.categoria, r.relato, r.fecha, r.puntaje, u.usuario FROM relatos r, usuarios u WHERE r.usuario_id = u.id order by fecha DESC',(err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })
}
// SELECT * FROM relatos WHERE usuario_id =?
exports.todosRelatosAutor = (id, done)=>{
   //lanzo la sentencia:
   //Todos los relatos por autor (id)
   db.get().query('SELECT * from relatos where usuario_id=? order by fecha DESC',[id], (err,rows)=>{
   //SELECT * from relatos where usuario_id=? order by fecha DESC
      if(err) return done(err, null)
      done(null, rows)
   })
}
exports.todosRelatos = (done)=>{
   //lanzo la sentencia:
   //Todos los relatos por autor (id)
   db.get().query('SELECT r.id, r.titulo, r.categoria, r.relato, r.fecha, r.propuesta, r.puntaje, u.usuario FROM relatos r, usuarios u WHERE r.usuario_id = u.id AND r.usuario_id = ? ORDER BY id DESC',(err,rows)=>{

    // SELECT r.id, r.titulo, r.categoria, r.relato, r.fecha, u.usuario, FROM relatos r, usuarios u WHERE r.usuario_id = u.id AND r.usuario_id = ? ORDER BY id DESC

      if(err) return done(err, null)
      done(null, rows)
   })

}


exports.relatoscat5Id = (id, done)=>{
  //lanzo la sentencia:
  //Nº de relatos de la categoria 5 por autor (id)
  db.get().query('SELECT COUNT(*) as total from relatos r where r.categoria=5 AND usuario_id=?',[id],(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}


exports.relatoscat15Id = (id, done)=>{
  //lanzo la sentencia:
  //Nº de relatos de la categoria 15 por autor (id)
  db.get().query('SELECT COUNT(*) as total from relatos r where r.categoria=15 AND usuario_id=?',[id],(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}


exports.relatoscatnoId = (id, done)=>{
  //lanzo la sentencia:
  //Nº de relatos de la categoria Sin-Limite(1000) por autor (id)
  db.get().query("SELECT COUNT(*) as total from relatos r where r.categoria='∞' AND usuario_id=?",[id],(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}
//Nº total de relatos de todos los autores
exports.nrelatosTotal = (done)=>{
  //lanzo la sentencia:
  //Nº de relatos de la categoria Sin-Limite(1000) por autor (id)
  db.get().query('SELECT COUNT(*) as total FROM becomeawriter.relatos',(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}

//Nº total de relatos de categoria Ilimitada
exports.nTotalrelatoscatilimitada = (done)=>{
  //lanzo la sentencia:
  //Nº de relatos de la categoria Sin-Limite(1000) por autor (id)
  db.get().query("SELECT COUNT(*) as total FROM becomeawriter.relatos WHERE categoria='∞'",(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}

//Nº total de relatos de categoria 5 min
exports.nTotalrelatoscat5 = (done)=>{

  db.get().query("SELECT COUNT(*) as total FROM becomeawriter.relatos WHERE categoria=5",(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}

//Nº total de relatos de categoria 5 min
exports.nTotalrelatoscat15 = (done)=>{

  db.get().query("SELECT COUNT(*) as total FROM becomeawriter.relatos WHERE categoria=15",(err,rows)=>{

     if(err) return done(err, null)
     done(null, rows)
  })

}


exports.mostrarRelatosporUsuario = (id, done)=>{
   //lanzo la sentencia:
   //El numero de relatos de un autor
   db.get().query('SELECT COUNT(*) as total FROM relatos WHERE usuario_id =? ORDER BY fecha DESC', [id], (err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })
}

exports.mostrarRelato = (id, done)=>{
   //lanzo la sentencia:
   //el relato que corresponde a un id
   db.get().query('SELECT * from relatos where id=? ORDER BY fecha DESC',[id], (err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })

}

exports.guardarRelato = ({id, titulo, categoria, relato, fecha, usuario_id, propuesta}, done)=>{
  let consulta = 'INSERT INTO relatos (id, titulo, categoria, relato, fecha, usuario_id, propuesta) VALUES (?,?,?,?,?,?,?)'
   db.get().query(consulta, [id, titulo, categoria, relato, fecha, usuario_id, propuesta], (err,rows) =>{

      if(err) return done(err, null)
      done(null, rows)
   })

}

exports.borrarRelato = (id, done)=>{
  db.get().query('DELETE FROM relatos WHERE id=?',[id], (err,rows) =>{

     if(err) return done(err, null)
     done(null, rows)
  })

}






