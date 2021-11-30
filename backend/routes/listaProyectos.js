const express = require('express');
const router = express.Router();
const { getUsuario } = require('../models/dao_usuario')
const { getProyecto, getProyectos, getProyectosPorUsuario, getProyectosFiltroCategoria, getProyectosOrdenarPrecioMayor, getProyectosOrdenarPrecioMenor, getProyectosOrdenarNuevo, getProyectosOrdenarAntiguedad, getProyectosFiltroValidacion} = require('../models/dao_proyecto')
const { favAdd, favDelete, getFavByUsuario, getProyFavByUsuario} = require('../models/dao_favoritos')

router.get("/listaProyectos", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    if(req.session.login){
        const listaProyectos = await getProyectos();
        usuario = await getUsuario(parseInt(req.session.u_id));
        const listaProyFavs = await getProyFavByUsuario(usuario);

        console.log("listaProyecotsID: ", listaProyectos.map(a => a.id))
        console.log("listaFavoritosID: ", listaProyFavs.map(a => a.id))
        //console.log("Compare ", listaProyFavs.map(a => a.id).every(elem => listaProyectos.map(a => a.id).includes(elem)))
        //https://www.designcise.com/web/tutorial/how-to-check-if-an-array-contains-all-elements-of-another-array-in-javascript
        notif_n = await getNumbNotificacions(usuario)

        res.render('listaProyectos',{
            u : usuario,
            lproy : listaProyectos,
            lfav : listaProyFavs,
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
/*let filtro="";
router.post('/listaProyectosFiltro/:filt',async(req,res)=>{
    const f = req.params.filt;
    filtro=f;
    console.log(f);
    const listaProyectosF = await getProyectosFiltroCategoria(f);
    
    res.render('listaProyectosFiltro',{
        lproy : listaProyectosF
    });
})*/
let filtro2="";
router.post('/listaProyecto/moder',async(req,res)=>{
    const f = req.body.filtro2;
    filtro2=f;
    console.log(f);
    const listaProyectosFV = await getProyectosFiltroValidacion(f);
    
    res.render('listaProyectos',{
        lproy : listaProyectosFV,
        registrado : req.session.login
    });
})
let filtro1="";
router.post('/listaProyecto/filt',async(req,res)=>{
    
    const f=req.body.filtro1;
    filtro1 = f;
    if(filtro1 == 'pMayor'){
        const listaProy = await getProyectosOrdenarPrecioMayor();
        res.render('listaProyectos',{
            lproy : listaProy,
            registrado : req.session.login
        })
    }else if(filtro1 == 'pMenor'){
        const listaProy = await getProyectosOrdenarPrecioMenor();
        res.render('listaProyectos',{
            lproy : listaProy,
            registrado : req.session.login
        })
    }else if(filtro1 == 'pNuevo'){
        const listaProy = await getProyectosOrdenarNuevo();
        res.render('listaProyectos',{
            lproy : listaProy,
            registrado : req.session.login
        })
    }else if(filtro1 == 'pViejo'){
        const listaProy = await getProyectosOrdenarAntiguedad();
        res.render('listaProyectos',{
            lproy : listaProy,
            registrado : req.session.login
        })
    }

})

router.post('/addFav', async (req,res)=>{
    const fav = {
        id_u: parseInt(req.session.u_id),
        id_p: parseInt(req.body.pID)
    }
    await favAdd(fav)

    res.redirect('listaProyectos');
})
router.post('/delFav', async (req,res)=>{
    const fav = {
        id_u: parseInt(req.session.u_id),
        id_p: parseInt(req.body.pID)
    }
    await favDelete(fav)
 
    res.redirect('listaProyectos');
})

router.get("/listaProyectos/f/:filt", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    const f = req.params.filt;

    if(req.session.login){
        const listaProyectos = await getProyectosFiltroCategoria(f);
        usuario = await getUsuario(parseInt(req.session.u_id));
        const listaProyFavs = await getProyFavByUsuario(usuario);

        console.log("listaProyecotsID: ", listaProyectos.map(a => a.id))
        console.log("listaFavoritosID: ", listaProyFavs.map(a => a.id))
        //console.log("Compare ", listaProyFavs.map(a => a.id).every(elem => listaProyectos.map(a => a.id).includes(elem)))
        //https://www.designcise.com/web/tutorial/how-to-check-if-an-array-contains-all-elements-of-another-array-in-javascript

        res.render('listaProyectos',{
            u : usuario,
            lproy : listaProyectos,
            lfav : listaProyFavs,
            registrado : req.session.login
        });
    }else{
        const listaProyectos = await getProyectosFiltroCategoria(f);

        res.render('listaProyectos',{
            lproy : listaProyectos,
            registrado : req.session.login
        });
    }
    
})
module.exports = router;