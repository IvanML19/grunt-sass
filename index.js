'use strict'

const express 		= require('express')
const bodyParser 	= require('body-parser')
const config 		= require('./config')
const hbs 			= require('express-handlebars') // motor de vistas

const app 	= express()

app.use(bodyParser.urlencoded( { extended: false } ) )
app.use(bodyParser.json())

// ruta a los assets
app.use('/static', express.static('build'))


// configuramos handlebars y 
app.engine('.hbs', hbs({
	defaultLayout: 'default',
	extname: '.hbs'	
}))
app.set('view engine', '.hbs')


// routes
app.get('/', (req, res) => {
	res.render('login')
})


app.listen(config.port, () => {
	console.log(`Servidor corriendo en localhost:${config.port}`)
})