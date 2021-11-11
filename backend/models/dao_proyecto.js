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

const getProyectosPorUsuario = async (uId) => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAndCountAll({
        where : {
            idUsuario : uId
        }
    });
    

    const proyectos = []
    for(let p of ps.rows) {
        proyectos.push({
            id : p.id,
            nombre : p.nombre,
            categorias : p.categorias,
            descripcion : p.descripcion,
            fechaCreacion : p.fechaCreacion,
            fechaLimite : p.fechaLimite,
            imagen : p.imagen,
            montoRecaudado : p.montoRecaudado,
            links_externos : p.links_externos,
            idUsuario : p.idUsuario

        })
    }
    
    return proyectos;
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
    getProyectosPorUsuario : getProyectosPorUsuario,
    createProyecto : createProyecto
}