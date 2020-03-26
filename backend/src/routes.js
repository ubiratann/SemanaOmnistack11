const express = require('express')

const routes = express.Router()

const Ongcontroller = require('./controllers/OngController')
const Incidentcontroller = require('./controllers/IncidentController')
const Profilecontroller = require('./controllers/ProfileController')
const Sessioncontroller = require('./controllers/SessionController')
//Rota para 'CRD' ONGS
routes.get('/ongs', Ongcontroller.index)
routes.post('/ongs', Ongcontroller.create)


//Rota para 'CRD' casos 
routes.get('/incidents', Incidentcontroller.index)
routes.post('/incidents', Incidentcontroller.create)
routes.delete('/incidents/:id', Incidentcontroller.delete)

//Rota para 'CRD' Profile
routes.get('/profile', Profilecontroller.index)

//ROTA de login
routes.post('/session', Sessioncontroller.create)


module.exports = routes 
