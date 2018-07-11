var express = require('express');
var router = express.Router();
//Me importo el modelo concreto:
let modelUsuario = require('../models/usuarios')
let modelRelato = require('../models/relatos')
let modelRegistro = require('../models/registro')
let modelProp = require('../models/propuestas')
let modelTips = require('../models/tips')

//Inserto un registro de usuario nuevo: Dar de alta usuario
//http://localhost:3000/api/insert/newuser
router.post('/insert/newuser', (req, res) => {
	console.log(req.body);
	
		//recuperamos parametros de esa ruta: 
		modelRegistro.guardarUsuario(
			{
				usuario: req.body.usuario,
				password: req.body.password,
				country: req.body.country,
				city: req.body.city,
				email: req.body.email

			}, (err, rows) => {
			
			if (err) return console.log(err.message)
			res.json(rows[0])

		})
})

//Ruta 0:
// Login de Usuarios: en Postman: 
//http://localhost:3000/api/usuario/login

router.post('/usuario/login', (req, res) => {
	// console.log(req.body);
	modelRegistro.AccesoUsuario(req.body.usuario, (err,result)=>{ 
			// console.log(result.length);
			
			if ( result.length === 0 ) {
				res.json({error:"falloUsuario"})
			} else {
          console.log(req.body.password)

					if(result[0].password !== req.body.password){
 					res.json({error:"falloPassword"})
					}else{
						// console.log(result);
						res.json(result[0])
					}
			}

			})
})
//Ruta 1: 
//http://localhost:3000/api/usuario/index

router.get('/usuario/index', (req, res) => {

	modelUsuario.index((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})

//Ruta2: /api/usuario/show/3
//http://localhost:3000/api/usuario/show/2
router.get('/usuario/show/:id', (req, res) => {

	//recuperamos parametros de esa ruta: 
	let idUsuario = req.params.id
	modelUsuario.show(idUsuario, (err, rows) => {
		if (err) return console.log(err.message)
	   res.json(rows)
	})
})

//Ruta 1: 
//http://localhost:3000/api/usuario/paises

router.get('/usuario/paises', (req, res) => {

	modelUsuario.ncountryTotal((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})

//Ruta 12: 
//http://localhost:3000/api/totalcatilim

router.get('/totalcatilim', (req, res) => {

	modelRelato.nTotalrelatoscatilimitada((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})
//Ruta 12: 
//http://localhost:3000/api/totalcat5

router.get('/totalcat5', (req, res) => {

	modelRelato.nTotalrelatoscat5((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})

//Ruta 12: 
//http://localhost:3000/api/totalcat15

router.get('/totalcat15', (req, res) => {

	modelRelato.nTotalrelatoscat15((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})






//Ruta3: /api/relatos/show/bydate
//http://localhost:3000/api/relato/show/bydate
router.get('/relato/show/bydate', (req, res) => {

	//recuperamos parametros de esa ruta: 
	modelRelato.mostrarRelatosOrdenados((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})

//Ruta7.2: 
//Nº de relatos de la categoria 5 min por autor
//http://localhost:3000/api/cat5/1

router.get('/cat5/:id', (req, res) => {
	let cat5totaluser= req.params.id
	//recuperamos parametros de esa ruta: 
	modelRelato.relatoscat5Id(cat5totaluser,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})

//Ruta7.3: 
//Nº de relatos de la categoria 5 min por autor
//http://localhost:3000/api/cat15/1

router.get('/cat15/:id', (req, res) => {
	let cat15totaluser= req.params.id
	//recuperamos parametros de esa ruta: 
	modelRelato.relatoscat15Id(cat15totaluser,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})

//Ruta7.3: 
//Nº de relatos de la categoria Sin limite min por autor
//http://localhost:3000/api/catno/1

router.get('/catno/:id', (req, res) => {
	let catnototaluser= req.params.id
	//recuperamos parametros de esa ruta: 
	modelRelato.relatoscatnoId(catnototaluser,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})


//Ruta7.4: 
//Nº TOTAL ABSOLUTO de relatos de todos los autores

//http://localhost:3000/api/totalrelatos

router.get('/totalrelatos', (req, res) => {

	modelRelato.nrelatosTotal((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})


//Ruta3.2: /api/relatos/show/byid
//http://localhost:3000/api/relato/autor/2
router.get('/relato/autor/:id', (req, res) => {
	//recuperamos parametros de esa ruta: 
	let identificador2= req.params.id
	modelRelato.todosRelatosAutor(identificador2,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})

//Ruta3.3: /api/relatos/show/byid
//http://localhost:3000/api/relato/show2/2
router.get('/relato/show2/:id', (req, res) => {
	//recuperamos parametros de esa ruta: 
	modelRelato.todosRelatos((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})
//Ruta3.4: /api/relatos/readstory/id
//http://localhost:3000/api/readstory/id
router.get('/relato/readstory/:id', (req, res) => {
	let identificador= req.params.id
	modelRelato.mostrarRelato(identificador,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})
//Ruta3.5: /api/relatos/readstory/id
//Todos el número de relatos escritos por este autor
//http://localhost:3000/api/readstory/:id/totals
router.get('/relato/readstory/:id/totals', (req, res) => {
	let idreltotal= req.params.id
	modelRelato.mostrarRelatosporUsuario(idreltotal,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})
//creo(guardo) un relato escrito en writeboard.
//http://localhost:3000/api/relato/readstory/create
router.post('/relato/readstory/create', (req, res) => {
console.log(req.body);

	//recuperamos parametros de esa ruta: 
	modelRelato.guardarRelato(
		{
			titulo: req.body.titulo,
			categoria: req.body.categoria,
			relato: req.body.relato,
			fecha: req.body.fecha, 
			usuario_id: req.body.usuario_id, 
			propuesta:req.body.propuesta
	   }, (err, rows) => {
		
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})

//Ruta4:
//http://localhost:3000/api/propuestas/prop1rand
router.get('/propuestas/prop1rand', (req, res) => {
	modelProp.propuesta1((err, rows) => {
		console.log(rows)
		let objRes = {}
		rows.forEach(row => {
			for (var key in row[0]) {
				objRes[key] = row[0][key];
			}
		});
		// res.send("Ola ke ase")
		res.json(objRes)
	})
})

//Ruta5: /api/relatos/show/bydate
//http://localhost:3000/api/propuestas/prop2rand
router.get('/propuestas/prop2rand', (req, res) => {

	//recuperamos parametros de esa ruta: 
	modelProp.propuesta2((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})

//Ruta6: 
//http://localhost:3000/api/tips

router.get('/tips', (req, res) => {

	//recuperamos parametros de esa ruta: 
	modelTips.tips((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})

//Ruta6: 
//http://localhost:3000/api/tip/1

router.get('/tip-read/:id', (req, res) => {
	let identificadorTip= req.params.id
	//recuperamos parametros de esa ruta: 
	modelTips.tipunico(identificadorTip,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows[0])
	})
})


//Ruta6: 
//http://localhost:3000/api/delete/relato/13

router.delete('/delete/relato/:id', (req, res) => {
	let identificadorBorrado= req.params.id
	//recuperamos parametros de esa ruta: 
	modelRelato.borrarRelato(identificadorBorrado,(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})





module.exports = router