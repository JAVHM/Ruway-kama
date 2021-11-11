const express = require('express');
const router = express.Router();
const { getProyecto, getProyectos, getProyectosPorUsuario} = require('../models/dao_proyecto');
const { getUsuario } = require('../models/dao_usuario');

router.get("/verProyecto/:ide", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    
    const pId = req.params.ide;
    console.log(pId)
    const p = await getProyecto(parseInt(pId));
    res.render('verProyecto', {
        proy: p
    })
    
    //error de mrd corre comando SQL 2 veces y bota 'mobile.js'
});
module.exports = router;