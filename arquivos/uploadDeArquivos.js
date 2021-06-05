const fs = require('fs');

fs.createReadStream('./assets/cachorrinho.jpg')
    .pipe(fs.createWriteStream('./assets/cachorrinho3.jpg'))
    .on('finish', () => {
        console.log('imagem escrita');
    })