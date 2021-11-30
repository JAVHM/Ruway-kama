const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { text } = require('express');

const createNotificacion = async (proyecto)=>{
    return await db.Notificacion.create(proyecto)
}
const deleteNotificacion = async (notificacionID) => {
    console.log("Se ha borrado: ", notificacionID)
    return await db.Notificacion.destroy({
        where: {
            id : notificacionID
        }})
}
const getNotificacionsByUsuario = async (usuario) => {
    const notifs = await db.Notificacion.findAndCountAll({
        where : {
            id_u : usuario.id
        }
    });
    const notificaciones = []
    for(let n of notifs.rows) {
        notificaciones.push({
            id : n.id,
            u_id : n.id_u,
            texto : n.texto,
            link : n.link,
            fecha : n.fecha
        })
    }
    console.log("Notificaciones de usuario: ", notificaciones)
    return notificaciones
}
const getNumbNotificacions = async (usuario) => {
    const notifs = await db.Notificacion.findAndCountAll({
        where : {
            id_u : usuario.id
        }
    });
    let n = 0
    for(let not of notifs.rows) {
        n++
    }
    console.log("n: ", n)
    return n
}
module.exports = {
    createNotificacion : createNotificacion,
    deleteNotificacion : deleteNotificacion,
    getNotificacionsByUsuario : getNotificacionsByUsuario,
    getNumbNotificacions : getNumbNotificacions
}