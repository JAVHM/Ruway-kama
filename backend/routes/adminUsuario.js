const express = require('express');
const router = express.Router();
const { deleteUsuario,getUsuariosSinAdmin} = require('../models/dao_usuario');

router.get('/usuarios', async (req, res) => {
    console.log('req.session.rol:'+req.session.rol)
    if(req.session.rol=='admin'){
        const usuarios = await getUsuariosSinAdmin();
        res.render('adminUsuario',{
            usuarios:usuarios
        })
    }else{
        res.redirect('/')
    }
    
});


router.get('/borrar/:id',async (req,res)=>{
    const id = req.params.id;
    await deleteUsuario(id);
    res.redirect('/usuarios')
})

module.exports = router;