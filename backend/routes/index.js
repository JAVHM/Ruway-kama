const express = require('express');
const router = express.Router();
const { getUsuario, updateUsuario} = require('../models/dao_usuario')
//LOGOUT

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})
router.get('/', async (req,res)=>{
    if(req.session.u_id==null){
        req.session.login= false;
        res.render('index', {
            registrado : req.session.login,
        });
    }else{
        req.session.login= true;
        usuario = await getUsuario(parseInt(req.session.u_id));
        res.render('index', {
            registrado : req.session.login,
            u : usuario
        });
    }
    
})
module.exports = router;