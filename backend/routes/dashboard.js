const express = require('express');
const { getProyectosPorUsuario, eliminarProyecto } = require('../models/dao_proyecto');
const router = express.Router();
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
    eliminarProyecto(parseInt(proy));
    res.redirect('/dashboard/1')
})

module.exports = router;