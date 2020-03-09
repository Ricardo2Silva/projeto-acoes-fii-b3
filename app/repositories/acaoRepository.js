let factory = require ('./connectionFactory');

function AcaoRepository() {};



AcaoRepository.prototype.listarAcao = (callback) => {
   
    let connection = factory.getConnection();
    connection.query('SELECT * FROM ACAO', callback);
    connection.end();

}

AcaoRepository.prototype.listarCompras = (callback) => {

    let connection =factory.getConnection();
    connection.query('SELECT * FROM COMPRAS',callback);
    connection.end();
}

module.exports = () => AcaoRepository;