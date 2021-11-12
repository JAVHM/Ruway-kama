const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { getUsuario } = require("./dao_usuario");
const { text } = require('express');

const favAdd = async (favoritos) => {
    return await db.Favoritos.create(favoritos)
}
const favDelete = async (favoritos) => {
    return await db.Favoritos.delete(favoritos)
}
const getFavByUsuario = async (usuario) => {
    const favs = await db.Favoritos.findAll({
        where : {
            id_u : usuario.id
        }
    })
    const arrayFav = []
    for(let f of favs){
        arrayFav.push({
            id: f.id,
            id_u : await db.Usuario.findOne({
                where : {
                    id : f.id_u
                }
            }),
            id_p : await db.Proyecto.findOne({
                where : {
                    id : f.id_p
                }
            })
        })
    }
    console.log(arrayFav)
    return arrayFav
}
module.exports = {
    favAdd : favAdd,
    favDelete : favDelete,
    getFavByUsuario : getFavByUsuario
}