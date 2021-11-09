const express = require('express');
const router = express.Router();
const { getUsuario, updateUsuario} = require('../models/dao_usuario')

router.get('/', async (req,res)=>{
    if(req.session.u_id==null){
        req.session.login= false;
        res.render('index', {
            registrado : req.session.login,
        });
    }else{
        req.session.login= true;
        usuario = await getUsuario(parseInt(req.session.u_id));
        console.log("nombre: ", usuario.nombre)
        res.render('index', {
            registrado : req.session.login,
            u : usuario
        });
    }
    
})
router.post('/', async (req,res)=>{
    const nombreUpdate = req.body.nombre
    console.log("post u_id: ", parseInt(req.session.u_id))
    await updateUsuario(req.session.u_id, nombreUpdate)
    res.redirect('/')
})
module.exports = router;