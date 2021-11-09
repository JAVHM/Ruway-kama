const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { getUsuarios} = require('../models/dao_usuario')

router.get('/login', async (req, res) => {
    res.render('login')
})
router.post('/login', async (req, res) => {
    const correoLogin = req.body.email
    const claveLogin = req.body.contrasena
    const listaUsuarios = await getUsuarios()

    listaUsuarios.forEach((usuario) => {
        //Encontrar al usuario con el mismo correo
        if (correoLogin == usuario.correo) {
            //Se encontro al usuario con el correo
            //Asi que se verifica la clave
            let compare = bcryptjs.compareSync(claveLogin, usuario.contraseña)
            if (compare) { //Booleano
                //La clave es correcta
                //Finalmente se guarda el usuario completo en la session
                req.session.u_id = usuario.id
                //console.log("req.session.u_id: ", req.session.u_id)
                res.redirect('/')
            } else {
                //La clave es incorrecta
                res.redirect('/errorFormulario')
            }

        }
    })
    //Si sale del forEach, no se encontro a un usuario con el mismo correo
    //Entones seria un caso de fallo.
    res.redirect('/errorFormulario')
})
module.exports = router;