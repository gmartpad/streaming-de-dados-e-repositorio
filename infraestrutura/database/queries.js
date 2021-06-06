const conexao = require('./conexao');

const executaQuery = (sql, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, parametros, (erro, resultados, campos) => {
            if(erro){
                reject(erro);
            }else{
                resolve(resultados);
            }
        })
    })
}

module.exports = executaQuery;