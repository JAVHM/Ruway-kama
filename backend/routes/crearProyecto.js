const express = require('express');
const router = express.Router();
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
    res.render('crearProyecto')
})

router.post('/crearProyecto',upload.single('imagen_subida'),async (req,res)=>{
    //A averiguar el tema de un Array para links externos.
    const proyecto ={
        nombre:req.body.nombre,
        categorias:req.body.categorias,
        descripcion:req.body.descripcion,
        fechaCreacion:new Date(),
        fechaLimite:new Date(),
        imagen:req.file.filename,
        montoRecaudado:0,
        links_externos:req.body.link_externo,
        idUsuario:1
    };
    console.log(req.file.filename);
    await createProyecto(proyecto);
    res.redirect("/mensajeria");
})
module.exports = router;