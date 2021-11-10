const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createProyecto = async (proyecto)=>{
    return await db.Proyecto.create(proyecto)
}

const getProyectos = async () => {
    //return data.usuarios;
    const listaProyectos = await db.Proyecto.findAll();
    return listaProyectos
}

const getProyecto = async (pId) => {
    const p = await db.Proyecto.findOne({
        where : {
            id : pId
        }
    })
    return p;
}

module.exports = {
    getProyectos : getProyectos,
    getProyecto : getProyecto,
    createProyecto : createProyecto
}