const express = require('express');
const router = express.Router();
const { getUsuario} = require('../models/dao_usuario')

router.get("/dashboard/:id", async (req, res) => {
    const uId = req.params.id;
    const u = await getUsuario(parseInt(uId));
    res.render('dashboard', {
        usuario: u
    })
})
module.exports = router;