let app = require ('express')();
let expressLoad = require('express-load');
let bodyParser = require('body-parser');

module.exports= ()=>{

 //*isolando o codigo das rotas    
 //ensinando o node a ler em formato json
 app.use(bodyParser.urlencoded({extended: true}))
 app.use(bodyParser.json());
 
    expressLoad('routes', {cwd: 'app'})
        .then('repositories')
        .then('utils')
        .into(app);

    return app;
   
} 