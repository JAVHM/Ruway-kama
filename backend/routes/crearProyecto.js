const express = require('express');
const router = express.Router();
const path = require('path');
const { createProyecto } = require('../models/dao_proyecto');
const mimeTypes = require('mime-types'); 
const multer = require('multer');

const storage = multer.diskStorage({
    destination: './backend/assets/uploads/',
    filename: function(req,file,cb){
        cb("",Date.now()+"."+mimeTypes.extension(file.mimetype));
    },
})

//Filtro en todo caso el usuario intente subir algun tipo de archivo diferente a una 'imagen'
const fileFilter= (req,file,cb)=>{
        const filetypes = /jpeg|jpg|jpe|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        console.log(mimetype);
        if(mimetype && extname){
            return cb(null,true)
        }
        cb('null,false');
}

const upload= multer({
    fileFilter,
    storage,
});
router.get("/crearProyecto", (req, res) => {
    console.log(req.session.login)
    if(req.session.login){
        res.render('crearProyecto')
    }else{
        res.redirect('/')
    }
})

router.post('/crearProyecto',upload.single('imagen_subida'),async (req,res)=>{
    if(req.session.login){
        console.log('Id del usuario con sesion: '+req.session.u_id)
        const proyecto ={
            nombre:req.body.nombre,
            categorias:req.body.categorias,
            descripcion:req.body.descripcion,
            fechaCreacion:new Date(),
            fechaLimite:new Date(),
            imagen:req.file.filename,
            montoRecaudado:0,
            links_externos:req.body.link_externo,
            idUsuario:req.session.u_id
        };
    console.log(req.file.filename);
    await createProyecto(proyecto);
    res.redirect("/dashboard/"+proyecto.idUsuario);
    }else{
        res.redirect('/')
    }    
});
module.exports = router;