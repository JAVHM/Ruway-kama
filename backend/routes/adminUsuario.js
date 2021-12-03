const express = require('express');
const router = express.Router();
const { deleteUsuario,getUsuarios} = require('../models/dao_usuario');

router.get('/usuarios', async (req, res) => {
    if(req.session.rol=='admin'){
        const usuarios = await getUsuarios();
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