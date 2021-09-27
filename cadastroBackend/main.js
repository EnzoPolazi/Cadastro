const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//Conectar ao banco de dados
mongoose.connect(process.env.DB_CONNECT,
    () => console.log('Conectado ao banco')
);

//Importando rotas
const authRouter = require('./routes/router.js');

//Ponte
app.use(express.json());

//Rotas-ponte
app.use(authRouter);

const port = 3000;
app.listen(port, () => console.log('Servidor iniciado e rodando'));