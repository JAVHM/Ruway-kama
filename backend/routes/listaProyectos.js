const express = require('express');
const router = express.Router();
const { getUsuario } = require('../models/dao_usuario')
const { getProyecto, getProyectos, getProyectosPorUsuario, getProyectosFiltroCategoria, getProyectosOrdenarPrecioMayor, getProyectosOrdenarPrecioMenor, getProyectosOrdenarNuevo, getProyectosOrdenarAntiguedad} = require('../models/dao_proyecto')
const { favAdd } = require('../models/dao_favoritos')

router.get("/listaProyectos", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    if(req.session.login){
        const listaProyectos = await getProyectos();
        usuario = await getUsuario(parseInt(req.session.u_id));

        res.render('listaProyectos',{
            u : usuario,
            lproy : listaProyectos,
            registrado : req.session.login
        });
    }else{
        const listaProyectos = await getProyectos();

        res.render('listaProyectos',{
            lproy : listaProyectos,
            registrado : req.session.login
        });
    }
    
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

router.post('/addFav', async (req,res)=>{
    const fav = {
        u_id: parseInt(req.session.u_id),
        p_id: parseInt(req.body.pID)
    }
    console.log("fav", fav)
    await favAdd(fav)

    const listaProyectos = await getProyectos();
    res.render('listaProyectos',{
        u : usuario,
        lproy : listaProyectos,
        registrado : req.session.login
    });
})

module.exports = router;