const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verificaJwt = require('./verificaJwt');
const User = require('../model/User.js');
const { validacaoRegistro, validacaoLogin } = require('../validation.js');

router.post('/register', async (req, res) => {

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

router.post('/login', async (req, res) => {

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

    //Cria de disponibiliza o token JWT
    const token = jwt.sign({_id: registro._id}, process.env.TOKEN_GEN);
    res.header('token-jwt', token).send("Logado com sucesso. Seu token é: " + token);
});

router.post('/edit', verificaJwt, async (req, res) => {

    //Validação dos dados antes da tentativa de edição
    const validacao = validacaoRegistro(req.body);
    if (validacao.error) {
        return res.status(400).send(validacao.error.details[0].message);
    }

    //Realiza update no banco de dados usando o _id relativo ao token atual
    const attRegistro = await User.findOneAndUpdate({_id: req.user._id}, req.body);
    if(!attRegistro) {
        return res.status(400).send("Atualização do registro falhou")
    }

    res.send("Registro atualizado com sucesso")
});

router.delete('/remove', verificaJwt, async (req, res) => {
    //Realiza delete no banco de dados usando o _id relativo ao token atual
    const removeRegistro = await User.findOneAndRemove({_id: req.user._id});
    if(!removeRegistro) {
        return res.status(400).send("Remoção do registro falhou")
    }

    res.send("Registro removido com sucesso")
});

module.exports = router;