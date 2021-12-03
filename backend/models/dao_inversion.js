const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;


const createInversion = async (inversion) => {
    return await db.Inversion.create(inversion);
}

module.exports = {
    createInversion: createInversion
}

