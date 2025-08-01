const express = require('express')
const Filme = require('../models/modelsFilme')
const router = new express.Router()

// Rota para listar os 10 primeiros filmes

router.get('/catalogo', async (req, res) => {
    try {
      // Filtrando GET exemplo: /catalogo?title=star&genres=adventure
      const filtro = {} // Arranjo para guardar as palavras filtro
      // $regex -> busca títulos que CONTENHAM aquela palavra || $options -> modifica o regex para ignorar diferenças entre maisculo e minusculo
      if (req.query.title) filtro.title = { $regex: req.query.title, $options: 'i' }
      if (req.query.genres) filtro.genres = { $regex: req.query.genres, $options: 'i' }

      // Paginando os filmes para retornar 20 por vez
      const page = parseInt(req.query.page) || 1 
      const limit = 24 // Número de filmes por página
      const skip = (page - 1) * limit // Pular os filmes já listados
      const filmes = await Filme.find(filtro).skip(skip).limit(limit) 
      const total = await Filme.countDocuments(filtro)
      const totalPages = Math.ceil(total / limit)
      res.status(200).json({ // Retorna os filmes paginados
        page,
        limit,
        totalItems: total,
        totalPages: Math.ceil(total / limit),
        results: filmes
  })
} catch (error) {
  res.status(500).json({ message: 'Erro ao buscar filmes', error })
  }
})

module.exports = router