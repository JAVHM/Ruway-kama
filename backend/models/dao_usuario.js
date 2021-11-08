const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getUsuarios = async () => {
    //return data.usuarios;
    const listaUsuarios = await db.Usuario.findAll();
    return listaUsuarios
}

const createUsuario = async (usuario) => {
    return await db.Usuario.create(usuario);
}

const getUsuario = async (uId) => {
    const u = await db.Usuario.findOne({
        where : {
            id : uId
        }
    })
    return u;
}

module.exports = {
    getUsuarios: getUsuarios,
    createUsuario: createUsuario,
    getUsuario : getUsuario
}

