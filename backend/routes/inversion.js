const express = require('express');
const router = express.Router();
const { getUsuario} = require('../models/dao_usuario')
const { getProyecto} = require('../models/dao_proyecto');
const {createInversor,getInversorConUsuario,updateInversion}=require('../models/dao_inversor');
const {createInversion}=require('../models/dao_inversion')
const { getNotificacionsByUsuario, getNumbNotificacions, deleteNotificacion, createNotificacion} = require('../models/dao_notificaciones')

router.get('/inversion/1/:ide', async (req, res) => {
    const pId = req.params.ide;
    console.log("ID PROYECTO",pId)
    req.session.pid = pId
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
    const p = await getProyecto(req.session.pid)
    res.render('inversion2', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n,
        proy: p
    });
})
router.get('/inversion/3', async (req, res) => {
    usuario = await getUsuario(parseInt(req.session.u_id));
    notificaciones = await getNotificacionsByUsuario(usuario)
    notif_n = await getNumbNotificacions(usuario)
    const p = await getProyecto(req.session.pid)

    res.render('inversion3', {
        registrado : req.session.login,
        u : usuario,
        notifs : notificaciones,
        n_notifs : notif_n,
        proy: p
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
router.post('/Inve', async (req,res)=>{
    const id_u= parseInt(req.session.u_id);
    const id_p= parseInt(req.session.pid);
    monto=req.body.valor
 //Buscar y tomar inversion con valores de usuario y proyecto
    const elemInversor = await getInversorConUsuario(id_u,id_p)
    //Revisar si el usuario ya es inversor
    if (elemInversor == null) {
        //Si no lo es, se crea un nuevo inversor
        //Creacion del Inversor
        const invNuevo = {
            id_u: parseInt(id_u),
            id_p: parseInt(id_p),
            InverAcum: 0
        }
        console.log("NUEVO INVERSOR",invNuevo)
        await createInversor(invNuevo)
        //Fin de creacion
        }
    
    //Crear nueva inversion
    const inversor = await getInversorConUsuario(id_u,id_p)
    console.log("INVERSOR ya creado",inversor)
    const inverNueva = {
        id_inv: parseInt(inversor.id),
        monto: monto
    }
    console.log("INVERSION",inverNueva)
    await createInversion(inverNueva)

    //Actualiza la InverAcum
    await updateInversion(inversor.id, monto)


    //Implementación de la notificación
    const p = await getProyecto(req.session.pid)
    const notif = {
        id_u : parseInt(req.session.u_id),
        texto : "Haz invertido " + monto + " en el proyecto: " + p.nombre,
        link : "NONE",
        fecha : new Date()
    }
    await createNotificacion(notif)
    
    res.redirect('/inversion/4');
})
router.post('/deleteNotif', (req, res) => {
    let id_p = parseInt(req.body.nID);
    deleteNotificacion(id_p)
    res.redirect('/');
})
module.exports = router;