const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { getUsuarios, createUsuario } = require('../models/dao_usuario')

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
    //Deberia mandar al main aqui
    res.redirect('/')
})
module.exports = router;