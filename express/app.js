// Importar o express
var express = require('express');

//Criando variável para ter acesso ao express
var app = express();

//Rota
app.get('/', function(req, res){
    res.write('Express utilizando');
    res.end();
})

//Servidor
app.listen(8090);
