const express = require('express');
const router = express.Router();
const { getUsuario} = require('../models/dao_usuario')
const { getProyecto} = require('../models/dao_proyecto');
const { getNotificacionsByUsuario, getNumbNotificacions, deleteNotificacion} = require('../models/dao_notificaciones')

router.get('/inversion/1/:ide', async (req, res) => {
    const pId = req.params.ide;
    const p = await getProyecto(pId)
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)
    res.render('inversion1', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n,
        proy: p
    });
})
router.get('/inversion/2', async (req, res) => {
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
router.get('/inversion/3', async (req, res) => {
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)

    //Implementación de la notificación
    proyecto = await getProyecto(parseInt(req.session.pId,))
    const notif = {
        id_u : parseInt(req.session.u_id),
        texto : "Haz invertido " + monto + " en el proyecto: " + proyecto.nombre,
        link : "NONE",
        fecha : new Date()
    }
    await createNotificacion(notif)
    res.render('inversion3', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n
    });
})
router.get('/inversion/4', async (req, res) => {
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)
    res.render('inversion4', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n
    });
})

router.get('/inversion/5', async (req, res) => {
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)
    res.render('inversion5', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n
    });
})
router.get('/inversion/6', async (req, res) => {
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)
    res.render('inversion6', {
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
        res.render('inversion1', {
            registrado : req.session.login,
        });
    }else{
        req.session.login= true;
        usuario = await getUsuario(parseInt(req.session.u_id));
        notificaciones = await getNotificacionsByUsuario(usuario)
        notif_n = await getNumbNotificacions(usuario)
        res.render('inversion1', {
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