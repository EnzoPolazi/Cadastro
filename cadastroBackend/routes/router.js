const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/User.js');
const { verificaPossuiJwt, verificaNaoPossuiJwt } = require('./verificaJwt');
const { validacaoRegistro, validacaoLogin, validacaoEdit } = require('./validation.js');

router.post('/register', verificaPossuiJwt, async (req, res) => {
    //Validação dos dados antes da criação do usuário
    const validacao = validacaoRegistro(req.body);
    if (validacao.error) {
        return res.status(400).send(validacao.error.details[0].message);
    }

    //Verifica se alguma chave de login já existe
    var checkChavesExistentes = await User.findOne({ email: req.body.email });
    if (checkChavesExistentes) {
        return res.status(400).send("Email já utilizado");
    }
    checkChavesExistentes = await User.findOne({ cpf: req.body.cpf });
    if (checkChavesExistentes) {
        return res.status(400).send("Cpf já utilizado");
    }
    checkChavesExistentes = await User.findOne({ pis: req.body.pis });
    if (checkChavesExistentes) {
        return res.status(400).send("Pis já utilizado");
    }

    //Insere hash na senha
    const salt = await bcrypt.genSalt(10);
    const senhaHashed = await bcrypt.hash(req.body.senha, salt);

    //Cadastra o usuário
    const user = new User({
        nome: req.body.nome,
        email: req.body.email,
        pais: req.body.pais,
        estado: req.body.estado,
        municipio: req.body.municipio,
        cep: req.body.cep,
        rua: req.body.rua,
        numero: req.body.numero,
        complemento: req.body.complemento,
        cpf: req.body.cpf,
        pis: req.body.pis,
        senha: senhaHashed
    });
    try {
        const usuarioSalvo = await user.save();
        res.send(usuarioSalvo);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', verificaPossuiJwt, async (req, res) => {

    //Validação dos dados antes da tentativa de login
    const validacao = validacaoLogin(req.body);
    if (validacao.error) {
        return res.status(400).send(validacao.error.details[0].message);
    }

    //Verifica se o login é válido
    var registro = await User.findOne({ email: req.body.login });
    if (!registro) {
        registro = await User.findOne({ cpf: req.body.login });
        if (!registro) {
            registro = await User.findOne({ pis: req.body.login });
            if (!registro) {
                return res.status(400).send("Login não encontrado");
            }
        }
    }

    //Verifica se a senha é válida
    var senhaValida = await bcrypt.compare(req.body.senha, registro.senha);
    if (!senhaValida) {
        return res.status(400).send("Senha inválida");
    }

    //Cria e disponibiliza o token JWT via cookie
    const token = jwt.sign({_id: registro._id}, process.env.TOKEN_GEN);
    res.cookie('Jwt', token, {
        httpOnly: true,
        maxAge: 24*60*60*1000 // horas*minutos*segundos*milisegundos = 1 dia
    });

    res.send("Logado com sucesso, cookie inicializado");
});

router.post('/edit', verificaNaoPossuiJwt, async (req, res) => {

    //Validação dos dados antes da tentativa de edição
    const validacao = validacaoEdit(req.body);
    if (validacao.error) {
        return res.status(400).send(validacao.error.details[0].message);
    }

    //Verifica se alguma chave de login já existe
    var checkChavesExistentes = await User.findOne({ email: req.body.email });
    if (checkChavesExistentes && req.body._id != checkChavesExistentes._id) {
        return res.status(400).send("Email já utilizado");
    }
    checkChavesExistentes = await User.findOne({ cpf: req.body.cpf });
    if (checkChavesExistentes && req.body._id != checkChavesExistentes._id) {
        return res.status(400).send("Cpf já utilizado");
    }
    checkChavesExistentes = await User.findOne({ pis: req.body.pis });
    if (checkChavesExistentes && req.body._id != checkChavesExistentes._id) {
        return res.status(400).send("Pis já utilizado");
    }
    
    //Realiza update no banco de dados usando o _id relativo ao token atual
    const attRegistro = await User.findOneAndUpdate({_id: req.user._id}, req.body);
    if(!attRegistro) {
        return res.status(400).send("Atualização do registro falhou");
    }

    res.send("Registro atualizado com sucesso");
});

router.post('/edit-senha', verificaNaoPossuiJwt, async (req, res) => {

    //Validação dos dados antes da tentativa de edição
    const validacao = validacaoEdit(req.body);
    if (validacao.error) {
        return res.status(400).send(validacao.error.details[0].message);
    }

    //Insere hash na senha
    const salt = await bcrypt.genSalt(10);
    const senhaHashed = await bcrypt.hash(req.body.senha, salt);
    req.body.senha = senhaHashed;
    
    //Realiza update no banco de dados usando o _id relativo ao token atual
    const attSenha = await User.findOneAndUpdate({_id: req.user._id}, req.body);
    if(!attSenha) {
        return res.status(400).send("Atualização da senha falhou");
    }

    res.send("Senha atualizada com sucesso");
});

router.delete('/remove', verificaNaoPossuiJwt, async (req, res) => {
    //Realiza delete no banco de dados usando o _id relativo ao token atual
    const removeRegistro = await User.findOneAndRemove({_id: req.user._id});
    if(!removeRegistro) {
        return res.status(400).send("Remoção do registro falhou")
    }

    res.send("Registro removido com sucesso")
});

router.get('/user', verificaNaoPossuiJwt, async (req, res) => {
    try {
        const cookieJwt = req.cookies['Jwt'];

        const decodedUser = jwt.verify(cookieJwt, process.env.TOKEN_GEN);
        if(!decodedUser){
            return res.status(401).send("Usuário não autenticado(cookie inválido)");
        };
        const userInfo = await User.findOne({_id: decodedUser._id});

        //Se usuário é válido, retorna dados do mesmo baseado em seu id
        res.send(userInfo);
    } catch (err) {
        return res.status(401).send("Usuário não autenticado(cookie inexistente)");
    }
});

router.post('/logout', verificaNaoPossuiJwt, (req, res) => {
    //Sobrescreve cookie existente para um que irá morrer
    res.cookie('Jwt', '', {maxAge: 0});

    res.send("Deslogado com sucesso!");
})

module.exports = router;