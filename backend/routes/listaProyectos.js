const express = require('express');
const router = express.Router();
const { getProyecto, getProyectos, getProyectosPorUsuario} = require('../models/dao_proyecto')

router.get("/listaProyectos", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    //proyecto = await getProyecto();
    const listaProyectos = await getProyectos();
    
    res.render('listaProyectos',{
        lproy : listaProyectos
    });
});
module.exports = router;