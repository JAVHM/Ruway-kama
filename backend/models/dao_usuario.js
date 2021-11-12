const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getUsuarios = async () => {
    //return data.usuarios;
    const listaUsuarios = await db.Usuario.findAll();
    return listaUsuarios
}

const createUsuario = async (usuario) => {
    return await db.Usuario.create(usuario);
}

const getUsuario = async (uId) => {
    const u = await db.Usuario.findOne({
        where : {
            id : uId
        }
    })
    return u;
}

const updateUsuario = async (uId, nombreUpdate, descriptionUpdate) => {
    const uEdit = await getUsuario(uId)
    uEdit.nombre = nombreUpdate
    uEdit.descripcion = descriptionUpdate
    console.log(descriptionUpdate)
    await uEdit.save()
    console.log(uEdit)
    return true;
}

const getuserbyemail = async (correo) => {
    const vj = await db.Usuario.findOne({
        where : {
            email : correo
        }
    })
    return vj;
}
const updateContrasena=async(email,contrasena)=>{
    const contrasenaedit=await getuserbyemail(email)
     contrasenaedit.contrasena=contrasena
     console.log(contrasena)
     await  contrasenaedit.save()
     return true;
   }
module.exports = {
    getUsuarios: getUsuarios,
    createUsuario: createUsuario,
    getUsuario : getUsuario,
    updateUsuario : updateUsuario,
    getuserbyemail: getuserbyemail,
    updateContrasena:updateContrasena
}

