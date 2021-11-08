const express = require('express');
const router = express.Router();
const { getUsuario} = require('../models/dao_usuario')

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
module.exports = router;