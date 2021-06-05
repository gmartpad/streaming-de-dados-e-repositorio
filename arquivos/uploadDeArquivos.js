const fs = require('fs');

module.exports = (caminhoLeitura, nomeDoArquivo, callbackImagemCriada) => {

    const caminhoEscrita = `./assets/imagens/${nomeDoArquivo}`;

    fs.createReadStream(caminhoLeitura)
        .pipe(fs.createWriteStream(caminhoEscrita))
        .on('finish', () => {
            callbackImagemCriada(caminhoEscrita);
        })
}
