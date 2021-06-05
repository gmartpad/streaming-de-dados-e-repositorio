const fs = require('fs');
const path = require('path');

module.exports = (caminhoLeitura, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg'];
    const tipo = path.extname(caminhoLeitura);
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) === -1;

    if(tipoEhValido){
        const caminhoEscrita = `./assets/imagens/${nomeDoArquivo}${tipo}`;
    
        fs.createReadStream(caminhoLeitura)
            .pipe(fs.createWriteStream(caminhoEscrita))
            .on('finish', () => {
                callbackImagemCriada(false, caminhoEscrita);
            });
    } else {
        const erro = 'Tipo é inválido';
        console.log('Erro! Tipo de extensão inválido');
        callbackImagemCriada(erro);
    }

}
