const { application } = require("express");
const { updateContrasena } = require("../models/dao_usuario");
const { getUsuarios } = require("../models/dao_usuario");
const router = require("./login");
const bcryptjs = require('bcryptjs');
router.get('/correoRec',(req, res) => {
    
    res.render('correoRec')
    res.redirect('/')
})
router.post('/correoRec', async (req, res) => {
    const correoLogin = req.body.recuperar_email
    const claveLogin = req.body.recuperar_contrasena
    const listaUsuarios = await getUsuarios()
    const nueva_clave=req.body.recuperar_nueva_contrasena
    listaUsuarios.forEach(async (usuario) => {
        //Encontrar al usuario con el mismo correo
        if (correoLogin == usuario.correo) {
            //Se encontro al usuario con el correo
            //Asi que se verifica la clave
            let compare = bcryptjs.compareSync(claveLogin, usuario.contraseña)
            if (compare) { //Booleano
                //La clave es correcta
                //Finalmente se guarda el usuario completo en la session
              
                const nueva_contrasena= await bcryptjs.hash(nueva_clave, 8)
                //console.log("req.session.u_id: ", req.session.u_id)
             await   updateContrasena(correoLogin,nueva_clave)
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
