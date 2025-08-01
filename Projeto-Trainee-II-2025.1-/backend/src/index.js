const express = require('express')
const mongoose = require('mongoose')
const Filme = require('./models/modelsFilme') // Importa o modelo Filme
const Carrinho = require('./models/modelsCarrinho') // Importa o modelo Carrinho
const routersFilme = require('./routers/routersFilme') // Importa a rota GET geral dos filmes
const routersCarrinho = require('./routers/routersCarrinho') // Importa as rotas GET POST e DELETE do carrinho

const app = express()
const cors = require('cors'); // add
const port = 3000
app.use(cors()); // add

app.use(express.json())

mongoose.connect('mongodb+srv://giovanegiroldo:9xNUzrYlCJLEJxw3@grupo2db.hurakc7.mongodb.net/carrinho-api?retryWrites=true&w=majority&appName=grupo2db')
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso!')

    app.use(routersFilme) // Usa a rota que está no arquivo routersFilme.js
    app.use(routersCarrinho) // Usa as rotas que estão no arquivo routersCarrinho.js

    app.listen(port, () => {
       console.log(`Servidor rodando na porta ${port}`)
    })
  })
  .catch((error) => {
    console.error('Erro ao conectar no MongoDB:', error)
  })