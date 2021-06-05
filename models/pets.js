const conexao = require('../infraestrutura/conexao');
const uploadDeArquivos = require('../arquivos/uploadDeArquivos');

class Pet {
    adiciona(pet, res) {
        const sql = 'INSERT INTO Pets SET ?';

        uploadDeArquivos(pet.imagem, pet.nome, (caminhoEscrita) => {
            const novoPet = {nome: pet.nome, imagem: caminhoEscrita}
            conexao.query(sql, novoPet, (erro, resultados) => {
                if(erro){
                    console.log(erro);
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(novoPet)
                }
            });

        })

    }
}

module.exports = new Pet();