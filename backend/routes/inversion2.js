const express = require('express');
const router = express.Router();
const { getUsuario, updateUsuario} = require('../models/dao_usuario')
const { getNotificacionsByUsuario, getNumbNotificacions, deleteNotificacion} = require('../models/dao_notificaciones')

router.get('/inversion2', async (req, res) => {
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)
    res.render('inversion2', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n
    });
})
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})
router.get('/', async (req,res)=>{
    if(req.session.u_id==null){
        req.session.login= false;   
        res.render('inversion2', {
            registrado : req.session.login,
        });
    }else{
        req.session.login= true;
        usuario = await getUsuario(parseInt(req.session.u_id));
        notificaciones = await getNotificacionsByUsuario(usuario)
        notif_n = await getNumbNotificacions(usuario)
        res.render('inversion2', {
            registrado : req.session.login,
            u : usuario,
            notifs : notificaciones,
            n_notifs : notif_n
        });
    }
})
router.post('/deleteNotif', (req, res) => {
    let id_p = parseInt(req.body.nID);
    deleteNotificacion(id_p)
    res.redirect('/');
})
module.exports = router;