var express = require('express');
var router = express.Router();
//Me importo el modelo concreto:
let modelUsuario = require('../models/usuarios')
let modelRelato = require('../models/relatos')
let modelProp = require('../models/propuestas')

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

//Ruta3.3: /api/relatos/show/byid
//http://localhost:3000/api/relato/show2/byid
router.get('/relato/show2/byid', (req, res) => {

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

//Ruta4:
//http://localhost:3000/api/propuestas/prop1rand
router.get('/propuestas/prop1rand', (req, res) => {
	modelProp.propuesta1((err, rows) => {
		console.log(rows)
		// res.send("Ola ke ase")
		res.json(rows)	
	})
})

//Ruta5: /api/relatos/show/bydate
//http://localhost:3000/api/propuestas/prop2rand
router.get('/propuestas/prop2rand', (req, res) => {

	//recuperamos parametros de esa ruta: 
	modelProp.propuesta2((err, rows) => {
		if (err) return console.log(err.message)
		res.json(rows)
	})
})
module.exports = router