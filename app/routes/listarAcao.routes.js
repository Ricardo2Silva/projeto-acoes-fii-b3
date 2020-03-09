let dbUtil = require('../utils/utils')();

module.exports = (app) => {

    app.get('/empresa', (req,resp) => {

        let acaoRepository = new app.repositories.acaoRepository();
        let msgError = 'houve um erro ao listar as acoes';
        acaoRepository.listarAcao((err,resultadoQuery) =>{
           
            if (err){resp.send(new Error(msgError))};

            const lista = resultadoQuery.map(item => {
                return dbUtil.databaseToObject(item); 
            });
            resp.send(lista);            

        });

    })

    app.get('/compras',(req,resp)=>{

        let acaoRepository = new app.repositories.acaoRepository();
        let msgError = 'houve um erro ao listar as compras';
        acaoRepository.listarCompras((err,resultadoQuery)=>{

            if (err){resp.send(new Error(msgError))};

            
            const lista = resultadoQuery.map(item => {
                return dbUtil.databaseToObject(item); 
            });
            resp.send(lista);            


        });




    })







}