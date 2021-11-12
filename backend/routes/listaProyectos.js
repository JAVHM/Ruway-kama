const express = require('express');
const router = express.Router();
const { getProyecto, getProyectos, getProyectosPorUsuario, getProyectosFiltroCategoria, getProyectosOrdenarPrecioMayor, getProyectosOrdenarPrecioMenor, getProyectosOrdenarNuevo, getProyectosOrdenarAntiguedad} = require('../models/dao_proyecto')

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
let filtro1="";
router.post('/listaProyecto/filt',async(req,res)=>{
    
    const f=req.body.filtro1;
    filtro1 = f;
    if(filtro1 == 'pMayor'){
        const listaProy = await getProyectosOrdenarPrecioMayor();
        res.render('listaProyectos',{
            lproy : listaProy
        })
    }else if(filtro1 == 'pMenor'){
        const listaProy = await getProyectosOrdenarPrecioMenor();
        res.render('listaProyectos',{
            lproy : listaProy
        })
    }else if(filtro1 == 'pNuevo'){
        const listaProy = await getProyectosOrdenarNuevo();
        res.render('listaProyectos',{
            lproy : listaProy
        })
    }else if(filtro1 == 'pViejo'){
        const listaProy = await getProyectosOrdenarAntiguedad();
        res.render('listaProyectos',{
            lproy : listaProy
        })
    }

})


module.exports = router;