const express = require('express');
const router = express.Router();
const { getUsuario} = require('../models/dao_usuario')

router.get("/dashboard/:id", async (req, res) => {
    const tId = req.params.id;
    
    res.render('dashboard',{
        

    })
})
module.exports = router;