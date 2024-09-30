const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

function getResponsePage(nombre){
    return `
    <body style="background-color: green; color: white;">
        <h1>Generacion de vista por template string</h1>
        <h2 style="color:white;">Hola ${nombre}</h2>
        <p style="color:white;">Fecha y Hora: ${new Date().toLocaleString()}</p>
    </body>
    `;
}

app.post('/datos', function(req, res) {
    console.log(req.body);
    let {nombre, template} = req.body;
    res.send(template? getResponsePage(nombre): console.log('Hola template'));
});

app.listen(process.env.PORT, (err)=>{
    if(err) return console.error(err);
    console.log(`escuchando en el puerto ${process.env.PORT}`);
});