let db = require('../db')

exports.guardarUsuario = ({id, usuario, password, country, city}, done)=>{
   let consulta = 'INSERT INTO usuarios (id, usuario, password, country, city) VALUES(?,?,?,?,?)'
    db.get().query(consulta, [id, usuario, password, country, city], (err,rows) =>{
 
       if(err) return done(err, null)
       done(null, rows)
    })
 
 }

 exports.AccesoUsuario = ( {usuario, password},done) => { 
   let consulta = "SELECT * FROM usuarios WHERE usuario = ? && password = ? "
    db.get().query(consulta, [usuario, password],(err,rows) =>{

      // if (req.body.usuario === rows[0].usuario ) {
      //   console.log("El usuario existe");
      //     if (req.body.password === rows[0].password) {
      //       console.log('El password es correcto');
      //       // this.router.navigate(['/newprofile']);
      //     } else {
      //       console.log("Error en el login");
      //     }
      // } else {
      //   console.log("El usuario no existe");
      // }


      // if(err) return done(err, null)
      // done(null, rows)

   })
}