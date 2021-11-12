const { application } = require("express");
const router = require("./login");
const bcryptjs = require('bcryptjs');
const { updateContrasena, getUsuarios } = require("../models/dao_usuario");

router.get('/correoRec', (req, res) => {

    res.render('correoRec')
    res.redirect('/')
})
router.post('/correoRec', async (req, res) => {
    const correoUsuario = req.body.recuperar_email
    const claveActual = req.body.recuperar_contrasena
    const listaUsuarios = await getUsuarios()
    const claveNueva = req.body.recuperar_nueva_contrasena
    listaUsuarios.forEach(async (usuario) => {
        //Encontrar al usuario con el mismo correo
        if (correoUsuario == usuario.correo) {
            //Se encontro al usuario con el correo
            //Asi que se verifica la clave
            console.log('Correo confirmado')
            let compare = bcryptjs.compareSync(claveActual, usuario.contraseña)

            console.log(compare)

            if (compare) { //Booleano
                //La clave es correcta
                //Finalmente se guarda el usuario completo en la session
                const claveNuevaEncriptada = await bcryptjs.hash(claveNueva, 8)
                //console.log("req.session.u_id: ", req.session.u_id)
                await updateContrasena(correoUsuario, claveNuevaEncriptada)
                res.redirect('/')
            } else {
                //La clave es incorrecta
                res.redirect('/errorFormulario')
            }

        }
    })
    //Si sale del forEach, no se encontro a un usuario con el mismo correo
    //Entones seria un caso de fallo.
    res.redirect('/')
})

module.exports = router;
