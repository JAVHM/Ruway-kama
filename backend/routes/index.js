const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    if(req.session.u_id==null){
        req.session.login= false;
    }else{
        req.session.login= true;
    }
    res.render('index', {
        registrado : false
    });
})
module.exports = router;