const express = require('express')
const Carrinho = require('../models/modelsCarrinho')
const Filme = require('../models/modelsFilme')
const router = new express.Router()

router.post('/carrinho/:id', async (req, res) => {
    const filme = await Filme.findById(req.params.id) // Procura o filme com aquele Id
    if (!filme) return res.status(404).send('Filme não encontrado')

    try {
        const item = await Carrinho.findOne({ filme: filme._id })

        // item já no carrinho? aumenta +1 na quantidade
        if (item) {
            item.quantidade += 1
            await item.save()
            return res.status(200).send('Mais um deste item adicionado ao carrinho')
        }

        // não está no carrinho? adiciona com quantidade = 1
        const novoItem = new Carrinho({ filme: filme._id })
        await novoItem.save()
        res.status(201).send('Item adicionado ao carrinho')

    } catch (e) {
        res.status(400).send('Erro ao adicionar ao carrinho')
    }
})

router.get('/carrinho', async (req, res) => {
    try {
        const itens = await Carrinho.find().populate('filme'); // traz dados completos do filme
        res.status(200).send(itens);
    } catch (e) {
        console.error(e);
        res.status(500).send('Erro ao buscar o carrinho');
    }
});

//AVISOS SOBRE AS ROTAS ABAIXO:
// Essas rotas utilizam-se do ID do item do carrinho, não do ID do filme.
/*  Nesse caso, atenção ao dar a requisiçao pois para remover todos os itens do carrinho,
basta dar um delete no endpoint /carrinho, o que pode gerar um erro de exclusão acidental*/
// Este metodo remove o item do carrinho
router.delete('/carrinho/:id', async (req, res) => { 
    try {
        const item = await Carrinho.findByIdAndDelete(req.params.id);
        if (!item) return res.status(404).send('Item não encontrado no carrinho');
        res.status(200).send('Item removido do carrinho');
    } catch (e) {
        res.status(500).send('Erro ao remover item do carrinho');
    }
});

// Este metodo remove 1 da quantidade do item do carrinho
router.patch('/carrinho/:id', async (req, res) => {
    try {
        const item = await Carrinho.findById(req.params.id);// Busca o item no carrinho pelo ID
        if (!item) return res.status(404).send('Item não encontrado no carrinho');// Verifica se o item existe

        if (item.quantidade > 1) {
            item.quantidade -= 1; // Diminui a quantidade em 1
            await item.save();
            return res.status(200).send('Quantidade reduzida em 1');
        } else {
            // Se a quantidade for 1, remove o item do carrinho
            await Carrinho.findByIdAndDelete(req.params.id);
            return res.status(200).send('Item removido do carrinho');
        }
    } catch (e) {
        res.status(500).send('Erro ao diminuir a quantidade do item no carrinho');
    }
})
// Rota para limpar o carrinho totalmente
router.delete('/carrinho', async (req, res) => {
    try {
        await Carrinho.deleteMany(); // Remove todos os itens do carrinho
        res.status(200).send('Carrinho limpo com sucesso');
    } catch (e) {
        res.status(500).send('Erro ao limpar o carrinho');
    }
})

module.exports = router