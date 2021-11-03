const db = require('../sequelize/models')

const createProyecto = async (proyecto)=>{
    return await db.Proyecto.create(proyecto)
}

module.exports = {
    createProyecto,
}