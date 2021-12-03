const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createInversor = async (inversor) => {
    console.log("Se ha creado inversor ", inversor)
    return await db.Inversor.create(inversor);
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
    const inv = await db.Inversor.findOne({
        where: {
            id_u: uId,
            id_p: pId
        }
    })
    console.log("el inversor es",inv)
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

