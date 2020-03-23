const express = require('express')
const app = express()


app.get('/', (request,response) => {
    return response.json({
        nome : 'Ubiratan'
        idade: '21'
    })
} )
//port que o app vai rodar no navegador 
app.listen(3333)

