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
            idUsuario : p.idUsuario,
            validacion: p.validacion

        })
    }
    
    return proyectos;
}

const getProyectosFiltroCategoria = async (filtro) => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAndCountAll({
        where : {
            categorias : filtro
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
            idUsuario : p.idUsuario,
            validacion: p.validacion

        })
    }
    
    return proyectos;
}

const getProyectosFiltroValidacion = async (v) => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAndCountAll({
        where : {
            validacion : v
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
            idUsuario : p.idUsuario,
            validacion: p.validacion

        })
    }
    
    return proyectos;
}

const getProyectosOrdenarPrecioMayor = async () => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAll({
        order: [
            ['montoRecaudado', 'DESC']
        ]
    });
        
    return ps;
}

const getProyectosOrdenarPrecioMenor = async () => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAll({
        order: [
            ['montoRecaudado', 'ASC']
        ]
    });
        
    return ps;
}

const getProyectosOrdenarNuevo = async () => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAll({
        order: [
            ['fechaCreacion', 'DESC']
        ]
    });
        
    return ps;
}

const getProyectosOrdenarAntiguedad = async () => {
    //return data.usuarios;

    const ps = await db.Proyecto.findAll({
        order: [
            ['fechaCreacion', 'ASC']
        ]
    });
        
    return ps;
}

const getProyecto = async (pId) => {
    const p = await db.Proyecto.findOne({
        where : {
            id : pId
        }
    })
    return p;
}

const eliminarProyecto = async (pId) => {
    const p = await db.Proyecto.destroy({
        where : {
            id : pId
        }
    })
    return p;
}

const updateProyecto = async (pl)=>{
    const plAEditar = await getProyecto(pl.id)
    plAEditar.nombre = pl.nombre
    plAEditar.descripcion = pl.descripcion
    plAEditar.categoria = pl.categoria
    plAEditar.imagen = pl.imagen
    plAEditar.validacion = pl.validacion
    plAEditar.montoRecaudado = plAEditar.montoRecaudado
    plAEditar.links_externos = pl.links_externos
    plAEditar.fechaLimite = plAEditar.fechaLimite
    await plAEditar.save()
    return true
}


module.exports = {
    getProyectos : getProyectos,
    getProyecto : getProyecto,
    getProyectosPorUsuario : getProyectosPorUsuario,
    createProyecto : createProyecto,
    eliminarProyecto : eliminarProyecto,
    getProyectosFiltroCategoria : getProyectosFiltroCategoria,
    getProyectosOrdenarPrecioMayor : getProyectosOrdenarPrecioMayor,
    getProyectosOrdenarPrecioMenor : getProyectosOrdenarPrecioMenor,
    getProyectosOrdenarNuevo : getProyectosOrdenarNuevo,
    getProyectosOrdenarAntiguedad : getProyectosOrdenarAntiguedad,
    getProyectosFiltroValidacion : getProyectosFiltroValidacion,
    updateProyecto
}