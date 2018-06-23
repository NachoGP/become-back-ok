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
				city: req.body.city
			}, (err, rows) => {
			
			if (err) return console.log(err.message)
			res.json(rows[0])
		})
})

//Ruta 0:
// Login de Usuarios: 
//http://localhost:3000/api/usuario/id

router.post('/usuario/id', (req, res) => {
	console.log(req.body);
	modelRegistro.AccesoUsuario(
		{
			usuario: req.body.usuario,
			password: req.body.password

		},(err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
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

//Ruta3: /api/relatos/show/bydate
//http://localhost:3000/api/relato/show/bydate
router.get('/relato/show/bydate', (req, res) => {

	//recuperamos parametros de esa ruta: 
	modelRelato.mostrarRelatosOrdenados((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
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
		res.json(rows[0])
	})
})





module.exports = router