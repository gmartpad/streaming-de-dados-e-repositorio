const fs = require('fs');
const path = require('path');

module.exports = (caminhoLeitura, nomeDoArquivo, callbackImagemCriada) => {

    const tipo = path.extname(caminhoLeitura);
    const caminhoEscrita = `./assets/imagens/${nomeDoArquivo}${tipo}`;

    fs.createReadStream(caminhoLeitura)
        .pipe(fs.createWriteStream(caminhoEscrita))
        .on('finish', () => {
            callbackImagemCriada(caminhoEscrita);
        })
}
