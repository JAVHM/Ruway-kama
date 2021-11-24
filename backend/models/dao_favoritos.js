const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { getUsuario } = require("./dao_usuario");
const { text } = require('express');

const favAdd = async (favoritos) => {
    console.log("Se a añadido: ", favoritos)
    return await db.Favoritos.create(favoritos)
}
const favDelete = async (favoritos) => {
    console.log("Se ha borrado: ", favoritos)
    return await db.Favoritos.destroy({
        where: {
            id_u : favoritos.id_u,
            id_p : favoritos.id_p
        }})
}
const getFav = async (usuario, proyecto) => {
    const fav = await db.Usuario.findOne({
        where : {
            id_u : usuario.id,
            id_p : proyecto.id
        }
    })
    console.log("Fav referente: ", fav)
    return true;
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
    console.log(arrayFav.map(a => a.id))
    return arrayFav
}
const getProyFavByUsuario = async (usuario) => {
    const favs = await db.Favoritos.findAll({
        where : {
            id_u : usuario.id
        }
    })
    console.log("favs ID: ", favs.map(a => a.id))
    console.log("favs ID_P: ", favs.map(a => a.id_p))
    arrayProyFav = []

    for(let p of favs){
        console.log("p.id_p", p.id_p)
        const ps = await db.Proyecto.findOne({
            where : {
                id: p.id_p
            }
        });
        arrayProyFav.push(ps)
    }

    return arrayProyFav
}
module.exports = {
    favAdd : favAdd,
    favDelete : favDelete,
    getFavByUsuario : getFavByUsuario,
    getProyFavByUsuario : getProyFavByUsuario
}