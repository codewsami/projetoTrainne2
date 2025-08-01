const mongoose = require('mongoose')

const carrinhoSchema = new mongoose.Schema({
 filme: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Filme'
  },
  quantidade: {
    type: Number,
    default: 1
  }
})

const Carrinho = mongoose.model('Carrinho', carrinhoSchema)

module.exports = Carrinho