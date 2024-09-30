const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Bienvenidos a tutoriales')
})

app.get('/node', function(req, res){
    res.send('Tutorial de Nodejs');
})

const server = app.listen(3001, function(){});