const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista()
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body;

        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado => {
                res.status(201).json(atendimentoCadastrado);
            })
            .catch(erro => {
                res.status(400).json(erro);
            })
    }) 

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}