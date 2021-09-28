const mongoose = require('mongoose');

const usuarioModelo = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    pais: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    estado: {
        type: String,
        required: true,
        min: 2,
        max: 2
    },
    municipio: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    cep: {
        type: String,
        required: true,
        min: 8,
        max: 9
    },
    rua: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    numero: {
        type: String,
        required: true,
        min: 1,
        max: 255
    },
    complemento: {
        type: String,
        max: 255
    },
    cpf: {
        type: String,
        required: true,
        min: 11,
        max: 14
    },
    pis: {
        type: String,
        required: true,
        max: 255
    },
    senha: {
        type: String,
        required: true,
        min: 3,
        max: 255
    }
}, {timestamps: true});

module.exports = mongoose.model('User', usuarioModelo);