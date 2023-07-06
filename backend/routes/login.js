const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { getUsuarios } = require('../models/dao_usuario')
const nodemailer = require('nodemailer')

router.get('/login', async (req, res) => {
    res.render('login')
})
router.post('/login', async (req, res) => {
    const correoLogin = req.body.email
    const claveLogin = req.body.contrasena
    const listaUsuarios = await getUsuarios()

    listaUsuarios.forEach(async (usuario) => {
        //Encontrar al usuario con el mismo correo
        if (correoLogin == usuario.correo) {
            //Se encontro al usuario con el correo
            //Asi que se verifica la clave
            let compare = bcryptjs.compareSync(claveLogin, usuario.contraseña)
            if (compare) { //Booleano
                //La clave es correcta
                //Finalmente se guarda el usuario completo en la session
                req.session.u_id = usuario.id
                console.log('USUARIOOOOO'+usuario.rol);
                console.log('USUARIOOOOO'+usuario.id);
                req.session.rol = usuario.rol
                //console.log("req.session.u_id: ", req.session.u_id)

                //Enlaze a la cuenta de email Ruwaykama
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: 'javanhmalpro@gmail.com',
                        pass: 'rqffmhlmroeijxzz',
                    },
                });

                await transporter.sendMail({
                    from: "Confirmacion de Registro",
                    to: req.body.email,//req.body.email,
                    subject: "Confirmacion de Registro", // Subject line
                    html: "<b>Se ha ingresado a tu cuenta</b>", // html body
                });

                res.redirect('/')
            } else {
                //La clave es incorrecta
                res.redirect('/errorFormulario')
            }

        }
    })
    //Si sale del forEach, no se encontro a un usuario con el mismo correo
    //Entones seria un caso de fallo.
    //res.redirect('/errorFormulario')
})
module.exports = router;