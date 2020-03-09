//*2-isolando banco de dados e criando conexao

let mysql = require('mysql');

module.exports.getConnection=()=>{

    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'ACOES'
    })
}
