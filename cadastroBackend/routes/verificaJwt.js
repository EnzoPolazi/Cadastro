const jwt = require('jsonwebtoken');

module.exports = function (req, res, next){
    const token = req.header('token-jwt');
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
}