const { application } = require("express");
const router = require("./login");
const bcryptjs = require('bcryptjs');
const { updateContrasena, getUsuarios } = require("../models/dao_usuario");

router.get('/correoRec', (req, res) => {

    res.render('correoRec', {
    })
})
router.post('/correoRec', async (req, res) => {
    const correoUsuario = req.body.recuperar_email;
    const claveActual = req.body.recuperar_contrasena;
    const listaUsuarios = await getUsuarios();
    const claveNueva = req.body.recuperar_nueva_contrasena;
  
    let usuarioEncontrado = false;
  
    for (const usuario of listaUsuarios) {
      if (correoUsuario === usuario.correo) {
        usuarioEncontrado = true;
        console.log('Correo confirmado');
        const compare = bcryptjs.compareSync(claveActual, usuario.contraseña);
        
        console.log(compare);
  
        if (compare) {
          const claveNuevaEncriptada = await bcryptjs.hash(claveNueva, 8);
          await updateContrasena(correoUsuario, claveNuevaEncriptada);
          res.redirect('/');
          return; // Exit the function after sending the response
        } else {
          res.redirect('/errorFormulario');
          return; // Exit the function after sending the response
        }
      }
    }
  
    if (!usuarioEncontrado) {
      res.redirect('/');
    }
  });

module.exports = router;
