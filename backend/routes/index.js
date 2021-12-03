const express = require('express');
const router = express.Router();
const { getUsuario, updateUsuario} = require('../models/dao_usuario')
const { getNotificacionsByUsuario, getNumbNotificacions, deleteNotificacion} = require('../models/dao_notificaciones')
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
        notificaciones = await getNotificacionsByUsuario(usuario)
        notif_n = await getNumbNotificacions(usuario)
        res.render('index', {
            registrado : req.session.login,
            u : usuario,
            notifs : notificaciones,
            n_notifs : notif_n
        });
    }
})

module.exports = router;