const Joi = require('joi');

//Validação do registro
const validacaoRegistro = (dados) => {
    const modelo = Joi.object({
        nome: Joi.string()
            .min(2)
            .max(255)
            .required(),
        email: Joi.string()
            .required()
            .max(255)
            .email(),
        pais: Joi.string()
            .min(3)
            .max(255)
            .required(),
        estado: Joi.string()
            .min(2)
            .max(2)
            .required(),
        municipio: Joi.string()
            .min(2)
            .max(255)
            .required(),
        cep: Joi.string()
            .min(8)
            .max(9)
            .required(),
        rua: Joi.string()
            .min(3)
            .max(255)
            .required(),
        numero: Joi.string()
            .min(1)
            .max(255)
            .required(),
        complemento: Joi.string()
            .max(255)
            .allow(''),
        cpf: Joi.string()
            .min(11)
            .max(14)
            .required(),
        pis: Joi.string()
            .min(11)
            .max(14)
            .required(),
        senha: Joi.string()
            .min(3)
            .max(255)
            .required()
    });
    return modelo.validate(dados);
};

const validacaoEdit = (dados) => {
    const modelo = Joi.object({
        nome: Joi.string()
            .min(2)
            .max(255)
            .required(),
        email: Joi.string()
            .required()
            .max(255)
            .email(),
        pais: Joi.string()
            .min(3)
            .max(255)
            .required(),
        estado: Joi.string()
            .min(2)
            .max(2)
            .required(),
        municipio: Joi.string()
            .min(2)
            .max(255)
            .required(),
        cep: Joi.string()
            .min(8)
            .max(9)
            .required(),
        rua: Joi.string()
            .min(3)
            .max(255)
            .required(),
        numero: Joi.string()
            .min(1)
            .max(255)
            .required(),
        complemento: Joi.string()
            .max(255)
            .allow(''),
        cpf: Joi.string()
            .min(11)
            .max(14)
            .required(),
        pis: Joi.string()
            .min(11)
            .max(14)
            .required(),
        senha: Joi.string()
            .min(3)
            .max(255)
            .required(),
        _id: Joi.required()
    });
    return modelo.validate(dados);
};

const validacaoLogin = (dados) => {
    const modelo = Joi.object({
        login: Joi.string()
            .max(255)
            .required(),
        senha: Joi.string()
            .min(3)
            .max(255)
            .required()
    });
    return modelo.validate(dados);
};

module.exports.validacaoRegistro = validacaoRegistro;
module.exports.validacaoEdit = validacaoEdit;
module.exports.validacaoLogin = validacaoLogin;