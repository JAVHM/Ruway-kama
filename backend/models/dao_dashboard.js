const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getMejorProyecto = async (uId) => {
    const mayorMonto = await db.Proyecto.max('montoRecaudado', {
        where : {
            idUsuario : uId,
            
        }
    });
    const p = await db.Proyecto.findOne({
        where : {
            idUsuario : uId,
            montoRecaudado : mayorMonto
        }
    })
    console.log(p);
    return p;
}

module.exports = {
    getMejorProyecto: getMejorProyecto
}