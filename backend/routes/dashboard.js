const express = require('express');
const router = express.Router();
const { getUsuario} = require('../models/dao_usuario')

router.get("/dashboard", async (req, res) => {
    res.render('dashboard')
})
module.exports = router;