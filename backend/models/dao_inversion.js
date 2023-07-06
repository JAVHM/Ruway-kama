const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;


const createInversion = async (inversion) => {
    return await db.Inversion.create(inversion);
}

const GetInversionxUsuario = async(usuario) => {
    const invs = await db.Inversion.findAll({
        where : {
            id_inv : usuario
        }
    })
    arrayInvs = []

    for(let p of invs){
        arrayInvs.push(p)
    }
    return arrayInvs
}

module.exports = {
    createInversion: createInversion,
    GetInversionxUsuario : GetInversionxUsuario
}

