const express = require('express');
const router = express.Router();

router.get("/verProyecto", (req, res) => {
    if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }
});
module.exports = router;