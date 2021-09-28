const jwt = require('jsonwebtoken');

module.exports.verificaNaoPossuiJwt = function verificaNaoPossuiJwt(req, res, next){
    const token = req.cookies['Jwt'];
    if (!token) {
        return res.status(401).send("Acesso negado, você não possui um token");
    }

    try {
        const verificado = jwt.verify(token, process.env.TOKEN_GEN);
        req.user = verificado;
        next();
    } catch (err) {
        res.status(400).send("Token Inválido");
    }
};

module.exports.verificaPossuiJwt = function verificaPossuiJwt(req, res, next){
    const token = req.cookies['Jwt'];
    if(token){
        return res.status(401).send("Acesso negado, você já está logado");
    } else {
        next();
    }
};