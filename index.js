//*1- criaçao do servidor

let porta =3000
let app = require('./config/express')();

app.listen(porta,()=>console.log('servidor rodando na porta: ',porta))