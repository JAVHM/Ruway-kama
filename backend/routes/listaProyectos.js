const express = require('express');
const router = express.Router();
const { getProyecto, getProyectos, getProyectosPorUsuario, getProyectosFiltroCategoria} = require('../models/dao_proyecto')

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
})
let filtro="";
router.post('/listaProyectosFiltro/:filt',async(req,res)=>{
    const f = req.params.filt;
    filtro=f;
    console.log(f);
    const listaProyectosF = await getProyectosFiltroCategoria(f);
    
    res.render('listaProyectosFiltro',{
        lproy : listaProyectosF
    });
})


module.exports = router;