const express = require('express')
const cors =  require('cors')
const routes = require('./routes')
const app = express()

app.use(express.json())//pro terminal interpretar o json do request

app.use(cors())
app.use(routes)

//porta que o app vai rodar no navegador 
app.listen(3333)


//              ANOTACOES DA AULA
/* 
    Métodos HTTP:
    GET: Buscar uma informacao do backend
    POST: Criar uma informação no backend
    PUT: Alterar uma informação do backend
    DELETE: Deletar uma informação do backend
*/

/* 
    Tipos de parametro
    Query Params: Parametros nomeados enviados na rota após um simbolo "?" (Filtros, paginacao,...)
    Route Params: Parametros utilizados para identificar recursos 
    Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos

*/

/**
 * Driver: SELECT * FROM ... WHERE ...
 * Query Builder: table('user').select('*').where()
 */


/**
 * COMANDOS USADOS AULA 2
 * npx knex init 
 */


 /**
  *ENTIDADES:
  *     ONG
  *     Caso(incident)
  * 
  * 
  * FUNCIONALIDADES:
  *     Login de ONG
  *     Logout de ONG
  *     Cadastro de ONG
  *     Cadastro de novos casos
  *     Deletar casos
  *     Listar os casos especificos de uma ONG
  *     Listar todos os casos
  *     Contato com a ONG(whatsapp email)    
  */