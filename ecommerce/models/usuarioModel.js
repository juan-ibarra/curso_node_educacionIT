const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioSchema = new schema({
    nombre: {
        type: String,
        required: true},
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fecha: { 
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('Usuario', usuarioSchema)