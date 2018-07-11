
let db = require('../db')

//http://localhost:3000/api/tips
exports.tips = (done) => {
   db.get().query('SELECT * FROM tipscards', (err, rows) => {
      if(err) return done(err, null)
      done(null, rows)
   })
}

//http://localhost:3000/api/tip-read/1
exports.tipunico = (id, done) => {
   db.get().query('SELECT * FROM tipscards WHERE id=?', [id], (err, rows) => {
      if(err) return done(err, null)
      done(null, rows)
   })
}