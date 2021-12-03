const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createInversor = async (inversor) => {
    return await db.Inversion.create(inversor);
}

const getInversorConId = async (iId) => {
    const inv = await db.Usuario.findOne({
        where: {
            id: iId
        }
    })
    return inv;
}

const getInversorConUsuario = async (uId, pId) => {
    const inv = await db.Inversion.findOne({
        where: {
            id_u: usuario.id,
            id_p: proyecto.id
        }
    })
    return inv
}

const updateInversion = async (iId, valor) => {
    const invEdit = await getInversorConId
    invEdit.InverAcum = invEdit.InverAcum
    await invEdit.save()
    return true

}

module.exports = {
    createInversor: createInversor,
    getInversorConId: getInversorConId,
    getInversorConUsuario: getInversorConUsuario,
    updateInversion: updateInversion
}

