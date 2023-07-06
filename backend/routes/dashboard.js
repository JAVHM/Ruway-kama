const express = require('express');
const router = express.Router();
const { getProyectosPorUsuario, eliminarProyecto, getProtectoxInversor } = require('../models/dao_proyecto');
const { getUsuario, updateUsuario} = require('../models/dao_usuario')
const { getProyFavByUsuario} = require('../models/dao_favoritos')
const {getMejorProyecto}=require('../models/dao_dashboard');
const { GetInversionxUsuario } = require('../models/dao_inversion');
router.get("/dashboard/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    const mejorProyecto= await getMejorProyecto(uId);
    console.log(mejorProyecto);
    res.render('dashboard', {
        usuario: u,
        proy : proyUsuario,
        mProy:mejorProyecto
    })
})
router.get("/dashboard/ProyectosAceptados/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    res.render('dashboard1', {
        usuario: u,
        proy : proyUsuario
    })
})
router.get("/dashboard/ProyectosFinanciados/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    res.render('dashboard2', {
        usuario: u,
        proy : proyUsuario
    })
})
router.get("/dashboard/InformacionPersonal/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    res.render('dashboard3',{
        usuario: u,
        proy : proyUsuario
    })
})
router.get("/dashboard/ProyectosFavoritos/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyFavByUsuario(u);
    res.render('dashboard4', {
        
        usuario: u,
        proy : proyUsuario
    })
})
router.get("/dashboard/Mensajeria/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    res.render('dashboard5', {
        usuario: u,
        proy : proyUsuario
    })
})
router.get("/dashboard/Historial/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    const transUsuario = await GetInversionxUsuario(uId);
    res.render('dashboard6', {
        usuario: u,
        proy : proyUsuario,
        invs : transUsuario
    })
})
router.get("/dashboard/:uId/delete/:pId", async (req, res) => {
    const proy = req.params.pId;
    const u = req.params.uId;
    eliminarProyecto(parseInt(proy));
    res.redirect('/dashboard/'+u)
})

router.post('/ActualizarDatosUsuario', async (req,res)=>{
    const nombreUpdate = req.body.nombre
    const descripcionUpdate = req.body.descripcion
    await updateUsuario(req.session.u_id, nombreUpdate,descripcionUpdate)
    res.redirect('/')
})

module.exports = router;