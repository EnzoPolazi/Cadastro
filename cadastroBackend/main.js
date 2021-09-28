const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

dotenv.config();

const app = express();

//Usar formato json nas requisições
app.use(express.json());
//Utilizar cookies
app.use(cookieParser());

//Configuração do Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'DELETE');
    app.use(cors());
    next();
})

//Importando rotas
const authRouter = require('./routes/router.js');
app.use(authRouter);

//Conectar ao banco de dados
mongoose.connect(process.env.DB_CONNECT,
    () => console.log('Conectado ao banco')
);

const port = 3000;
app.listen(port, () => console.log('Servidor inicializado e rodando'));