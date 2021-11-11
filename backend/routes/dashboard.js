const express = require('express');
const router = express.Router();
const { getProyectosPorUsuario, eliminarProyecto } = require('../models/dao_proyecto');
const { getUsuario} = require('../models/dao_usuario')

router.get("/dashboard/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    const proyUsuario = await getProyectosPorUsuario(uId);
    res.render('dashboard', {
        usuario: u,
        proy : proyUsuario
    })
})

router.get("/dashboard/:uId/delete/:pId", async (req, res) => {
    const proy = req.params.pId;
    const u = req.params.uId;
    eliminarProyecto(parseInt(proy));
    res.redirect('/dashboard/'+u)
})

module.exports = router;