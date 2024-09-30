const conexion = require('./conexion/conexion');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port http://localhost:${process.env.PORT}`);
});

