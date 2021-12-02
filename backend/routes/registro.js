const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const nodemailer = require('nodemailer')
const { getUsuarios, createUsuario } = require('../models/dao_usuario')
const { createNotificacion } = require('../models/dao_notificaciones')

router.get('/registro', async (req, res) => {
    res.render('registro')
})
router.post('/registro', async (req, res) => {
    //El nuevo usuario
    const usuarioDatos = {
        nombre: req.body.nombre,
        contraseña: await bcryptjs.hash(req.body.contrasena, 8), //Este es el encriptador.
        // El numero 8 es las veces que se realiza, mientras mas, mas seguro pero mas demora.
        correo: req.body.email,
        descripcion: 'Pon tu descripción',
    }
    //Verificando si el correo es unico
    const listaUsuarios = await getUsuarios()
    listaUsuarios.forEach(async (usuario) => {
        if (req.body.email == usuario.correo) {
            //Se encontro un usuario con el mismo correo
            res.redirect('/errorFormulario')
        }
    })
    //No se encontro usuario con el mismo correo.
    const usuarioNuevo = await createUsuario(usuarioDatos)

    //Enlaze a la cuenta de email Ruwaykama
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'Ruwaykama@gmail.com',
            pass: 'wvawtjhxpkndnpov',
        },
    });

    //Envio de email de confirmacion de creacion de cuenta
    await transporter.sendMail({
        from: '"Confirmacion de Registro" <Ruwaykama@gmail.com>',
        to: req.body.email,
        subject: "Confirmacion de Registro", // Subject line
        html: "<b>Tu cuenta a sido creada con exito! Bienvenido a Ruwaykama!</b>", // html body
    });

    //Agregado de la notificación de BIenvenida
    const notif = {
        id_u: usuarioNuevo.id,
        texto: "Bienvenido " + usuarioNuevo.nombre,
        link: "NONE",
        fecha: new Date()
    }
    await createNotificacion(notif)

    //Deberia mandar al main aqui
    res.redirect('/')
})
module.exports = router;