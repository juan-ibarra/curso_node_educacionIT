const express = require('express');
const app = express();

const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
/*
console.log(process.env)            // variables de entorno de nodejs
console.log(process.env.PORT)       // variables de entorno definidas en .env con dotenv
console.log(process.env.EMAIL)      // variables de entorno definidas en .env con dotenv
console.log(process.env.PASSWORD)   // variables de entorno definidas en .env con dotenv
*/

// usando un middleware
app.use(express.json());
// middleware para recibir info de las peticiones
app.use(morgan("dev"));

// creamos un middleware simple
const info = (req, res, next) => {
    console.log('Peticion recibida');
    const fecha  = new Date();
    console.log(fecha)

    next();
}

// usamos el middleware creado
app.use(info);

app.get('/', (req, res)=>{
    res.status(200).send('Welcome to backend course with nodejs');
});

app.get('/descarga', (req, res)=>{
    res.status(200).download('file.txt');
});

app.get('/*', (req, res)=>{
    res.status(404).send('ERROR 404 - Not Found');
});

app.post('/enviar', (req, res)=>{
    console.log(req.body);
    res.status(200).send('OK');
});

app.listen(process.env.PORT, ()=>{
    console.log(`escuchando en el puerto ${process.env.PORT}`);
});