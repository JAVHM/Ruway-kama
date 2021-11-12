const express = require('express');
const router = express.Router();
const { getUsuario } = require('../models/dao_usuario')
const { getProyecto, getProyectos, getProyectosPorUsuario, getProyectosFiltroCategoria} = require('../models/dao_proyecto')
const { favAdd } = require('../models/dao_favoritos')

router.get("/listaProyectosFiltro/:filt", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    //proyecto = await getProyecto();
    const f = req.params.filt;

    if(req.session.login){
        const listaProyectosF = await getProyectosFiltroCategoria(f);
        usuario = await getUsuario(parseInt(req.session.u_id));

        res.render('listaProyectosFiltro',{
            u : usuario,
            lproy : listaProyectosF,
            registrado : req.session.login
        });
    }else{
        const listaProyectosF = await getProyectosFiltroCategoria(f);

        res.render('listaProyectosFiltro',{
            lproy : listaProyectosF,
            registrado : req.session.login
        });
    }

    
    console.log(f)
    
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