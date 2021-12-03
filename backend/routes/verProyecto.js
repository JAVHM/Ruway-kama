const express = require('express');
const router = express.Router();
const { getProyecto, getProyectos, getProyectosPorUsuario} = require('../models/dao_proyecto');
const { getUsuario } = require('../models/dao_usuario');
const { getNotificacionsByUsuario, getNumbNotificacions} = require('../models/dao_notificaciones')

router.get("/verProyecto/:ide", async (req, res) => {
    /*if(req.session.login){
        res.render('verProyecto');
    }else{
        res.redirect('/');
    }*/
    
    const pId = req.params.ide;
    const p = await getProyecto(pId);
    if(req.session.u_id==null){
        res.render('verProyecto', {
            registrado : req.session.login,
            proy: p
        });
    }else{
        req.session.login= true;
        usuario = await getUsuario(parseInt(req.session.u_id));
        notificaciones = await getNotificacionsByUsuario(usuario)
        notif_n = await getNumbNotificacions(usuario)
        res.render('verProyecto', {
            proy: p,
            registrado : req.session.login,
            u : usuario,
            notifs : notificaciones,
            n_notifs : notif_n
        });
    }

    //error de mrd corre comando SQL 2 veces y bota 'mobile.js' FIXEAR
    //FIXEADO B)
});
module.exports = router;