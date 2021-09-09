const data = {
    usuarios: [
        { id: 1, nombre: "Usuario 1", email: "a@gmail.com", contraseña: 1246 },
        { id: 2, nombre: "Usuario 2", email: "a@gmail.com", contraseña: 1364 },
        { id: 3, nombre: "Usuario 3", email: "a@gmail.com", contraseña: 1486 },
        { id: 4, nombre: "Usuario 4", email: "a@gmail.com", contraseña: 1526 },
        { id: 5, nombre: "Usuario 5", email: "a@gmail.com", contraseña: 1646 }
    ],
}
const db = require('../sequelize/models')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getUsuarios = async () => {
    //return data.usuarios;
    const listaUsuarios = await db.Usuario.findAll();
    return listaUsuarios
}

const getUsuario = async (uId) => {
    //const u = await data.usuarios.find(usuario => usuario.id == uId)
    //return u;
    const listaUsuarios = await db.Usuario.findOne({
        where: {
            id: uId
        }
    })
    return listaUsuarios
}

//Seccion: MAILING - no se si crear un file diferente para esta parte -daniela
//Uso de la librerias
const nodemailer = require('nodemailer')
const jwt = require("jsonwebtoken")
//Crear el medio de transporte(medio de conexion)
const createTransporte = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        debug: true,
        auth: {
            //Esta parte se puede usar un token para mayor seguridad
            user: "5327f5910f3c1b",
            pass: "00b40870792521"
        }
    })
    return transport
}
//Funcion que permite el envio de correo
const sendEmailCreacion = async (user) => {
    const transporte = createTransporte()
    const info = await transporte.sendMail({
        from: '"Desarrollo" <desarrollo@example.com>',
        to: `${user.email}`, //cambiar nombre con respecto a atributo Usuario -> correo
        subject: `Bienvenido ${user.nombre} a E-SPORTS`,
        html: "<p>Su usuario se ha creado de manera existosa</p>"
    })
    //console.log("Mensaje enviado: %s", info.messageId)
}
//Verificar usuario admin
const verificarAdmin = async (user) => {
    const listaUsuario = 1//llamar lista de usuarios
    for (let i of listaUsuario) {
        //Buscar si es admin, por rol/tipoUsuario
        //Temporal como user 
        if (user.rol == i.rol) {
            //Es admin
            return true
        }
    }
    //No se puede verificar que es admin, no es admin
    return false
}
const getPasswordResetURL = (user, token) => {
    const tokenACOTADO=token.slice(0,10)
   return `http://localhost:3000/password/reset/${user.id}/${tokenACOTADO}`
}

//Recuperar email --- solo admin ->verificar que usuario sea admin
const sendEmailRecuperar = async (email) => {
    const transporte = createTransporte()
    //
    //console.log("LLEGUE")
    const user = await db.Usuario.findOne({
        where:{
            correo: email
        }
    })
    const secret = user.createdAt +"_"+user.id
    const token = jwt.sign({ user }, secret, {
        expiresIn: 3600 // 1 hour
    })
    //console.log("usuario ", user.nombre)
    //
    const url = getPasswordResetURL(user, token)
    //Verificar si es usuario admin
    const info = await transporte.sendMail({
        from: '"Desarrollo" <desarrollo@example.com>',
        to: `${user.correo}`, //cambiar nombre con respecto a atributo Usuario -> correo
        subject: `Recuperar contraseña de ${user.nombre} en E-SPORTS`,
        html: `
        <p>Para recuperar la contraseña, haga click en el siguiente link: </P>
        <a href=${url}>${url}</a>
        <p>El tiempo máximo de duración del link es de 1 hora</p>
        `
    })
    //console.log("Mensaje enviado",info.messageId)
}

//Creacion de Usuario
const createUsuario = async (usuario) => {
    return await db.Usuario.create(usuario);
}

const getUsuariosP = async (perPage,page) => {
    
    const ts = await db.Usuario.findAndCountAll({
        limit:perPage,
        offset:((perPage*page)-perPage)
    });
    const current=page;
    const pages=Math.ceil(ts.count/perPage);
    
    const usuarios = []
    for (let t of ts.rows) {
        usuarios.push({
            id : t.id,
            nombre : t.nombre,
            correo: t.correo,
            clave: t.clave,
            rol: t.rol,
        })
    }
    return {usuarios, pages, current};
}

const getUsuariosFiltro=async(filtro,perPage,page)=>{
    
    //console.log(filtro);
    
    const usuariosF=[]
    const usuarios= await db.Usuario.findAndCountAll({
        limit:perPage,
        offset:((perPage*page)-perPage),
        where:{
            rol:filtro
        }
    });
    const current=page;
    const pages=Math.ceil(usuarios.count/perPage);
    //console.log(torneos);
    
    for (let t of usuarios.rows) {
        usuariosF.push({
            id : t.id,
            nombre : t.nombre,
            correo: t.correo,
            clave: t.clave,
            rol: t.rol,
        })
    }
    return {usuariosF,pages, current};


    
}   

const getUsuariosNombre=async(filt,perPage,page)=>{
    
    //console.log(filtro);
    
    const usuariosF=[]
    const usuarios= await db.Usuario.findAndCountAll({
        limit:perPage,
        offset:((perPage*page)-perPage),
        where:{
            [Op.or]:[
            {nombre: {
                [Op.like]: '%' + filt + '%'
            }},
            {correo: {
                [Op.like]: '%' + filt + '%'
            }}
        ]
        }
    });
    const current=page;
    var pages=Math.ceil(usuarios.count/perPage);
    for (let t of usuarios.rows) {
        usuariosF.push({
            id : t.id,
            nombre : t.nombre,
            correo: t.correo,
            clave: t.clave,
            rol: t.rol,
        })
    }
    //AAA
    // const usuarios2= await db.Usuario.findAndCountAll({
    //     limit:perPage,
    //     offset:((perPage*page)-perPage),
    //     where:{
    //         correo: {
    //             [Op.like]: '%' + filt + '%'
    //         }
    //     }
    // });
    // pages=pages+Math.ceil(usuarios2.count/perPage);
    // for (let t of usuarios2.rows) {
    //     usuariosF.push({
    //         id : t.id,
    //         nombre : t.nombre,
    //         correo: t.correo,
    //         clave: t.clave,
    //         rol: t.rol,
    //     })
    // }
    return {usuariosF,pages, current};


    
}   

//Edicion de Usuario
const editUsuario = async (usuario) => {
    const usuarioEditar = await getUsuario(usuario.id)

    usuarioEditar.nombre = usuario.nombre
    usuarioEditar.correo = usuario.correo
    usuarioEditar.clave = usuario.clave
    usuarioEditar.rol = usuario.rol

    await usuarioEditar.save()

    return true
}
//VERIFICAR CORREO
const verificarCorreo =async(email)=>{
    const listaUsuario =await db.Usuario.findOne({
        where:{
            correo: email
        }
    })
    if(listaUsuario!=null){
        //Existe
        return true
    }else{
        //NO Existe
        return false
    }
}

module.exports = {
    getUsuarios: getUsuarios,
    getUsuario: getUsuario,
    sendEmailCreacion: sendEmailCreacion,
    createUsuario: createUsuario,
    editUsuario: editUsuario,
    sendEmailRecuperar: sendEmailRecuperar,
    verificarCorreo:verificarCorreo,
    getUsuariosP:getUsuariosP,
    getUsuariosFiltro:getUsuariosFiltro,
    getUsuariosNombre:getUsuariosNombre
};