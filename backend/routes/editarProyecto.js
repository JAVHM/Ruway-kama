const express = require('express');
const router = express.Router();
const path = require('path');
const { getProyecto,updateProyecto } = require('../models/dao_proyecto');
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
router.get("/editar/:id", async (req, res) => {
    const proy = await getProyecto(req.params.id);
    if(req.session.login){
        res.render('modificarProyecto',{
            proy:proy
        })
    }else{
        res.redirect('/')
    }
})

router.post("/modificarProyecto",upload.single('imagen_subida'), async (req, res) => {
    const proyecto = {
        id:parseInt(req.body.id),
        nombre:req.body.nombre,
        imagen:req.file.filename,
        categorias:req.body.categorias,
        links_externos:req.body.link_externo,
        validacion:"pendiente"
    }
    res.redirect("/listaProyectos")
    await updateProyecto(proyecto)
})


module.exports = router;