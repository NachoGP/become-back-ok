//Representa las acciones contra la tabla de propuestas

let db = require('../db')

//http://localhost:3000/api/propuestas/prop1rand
exports.propuesta1 = (done) => {
   db.get().query('SELECT genero FROM generos order by RAND() limit 1; SELECT personaje FROM personajes order by RAND() limit 1; SELECT sustantivo FROM sustantivos order by RAND() limit 1; SELECT localizacion FROM localizaciones order by RAND() limit 1; SELECT tema FROM temas order by RAND() limit 1;', (err, rows) => {
      if(err) return done(err, null)
      done(null, rows)
   })
}


//http://localhost:3000/api/propuestas/prop1randkids
exports.propuesta1kids = (done) => {
   db.get().query('SELECT genero FROM generoskids order by RAND() limit 1;SELECT personaje FROM personajeskids order by RAND() limit 1; SELECT sustantivo FROM sustantivoskids order by RAND() limit 1;', (err, rows) => {
      if(err) return done(err, null)
      done(null, rows)
   })
}


exports.propuesta2 = (done)=>{
   //lanzo la sentencia:
   //http://localhost:3000/api/propuestas/prop2rand
   db.get().query('SELECT completa,imagen FROM completas order by RAND() limit 1',(err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })
}


exports.propuesta2kids = (done)=>{
   //lanzo la sentencia:
   //http://localhost:3000/api/propuestas/prop2rand
   db.get().query('SELECT completa,imagen FROM completaskids order by RAND() limit 1',(err,rows)=>{

      if(err) return done(err, null)
      done(null, rows)
   })
}