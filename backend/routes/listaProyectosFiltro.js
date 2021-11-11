const express = require('express');
const router = express.Router();
const { getProyecto, getProyectos, getProyectosPorUsuario, getProyectosFiltroCategoria} = require('../models/dao_proyecto')

router.get("/listaProyectosFiltro/:filt", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    //proyecto = await getProyecto();
    const f = req.params.filt;
    console.log(f)
    const listaProyectosF = await getProyectosFiltroCategoria(f);
    
    res.render('listaProyectosFiltro',{
        lproy : listaProyectosF
    });
})
let filtro="";
router.post('/listaProyectos/:filt',async(req,res)=>{
    const f = req.params.filt;
    filtro=f;
    console.log(f);
    const listaProyectosF = await getProyectosFiltroCategoria(f);
    
    res.render('listaProyectosFiltro',{
        lproy : listaProyectosF
    });
})


module.exports = router;