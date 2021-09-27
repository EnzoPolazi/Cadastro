const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//Importando rotas
const authRouter = require('./routes/router.js');
app.use(authRouter);

//Permitir leitura de arquivos.json (que vem das requisições do frontEnd)
app.use(express.json());

//Conectar ao banco de dados
mongoose.connect(process.env.DB_CONNECT,
    () => console.log('Conectado ao banco')
);

const port = 3000;
app.listen(port, () => console.log('Servidor iniciado e rodando'));