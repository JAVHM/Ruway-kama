const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


const session = require('express-session');
//Cualquier tipo de archivo subido por el usuario va a la carpeta de assest/uploads
//*Validacion de que sea tipo Imagen* (por hacer)


app.use(session({
    secret : "123456789",
    resave : false,
    saveUninitialized : false
}))


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'assets')))
app.listen(3000, () => {
    console.log('Servidor funcional en http://localhost:3000')
});

//RUTAS
const indexRouter=require('./routes/index');
const mensajeriaRouter=require('./routes/mensajeria');
const dashboardRouter=require('./routes/dashboard');
const listaProyectosRouter=require('./routes/listaProyectos');
const verProyectoRouter=require('./routes/verProyecto');
const crearProyectoRouter=require('./routes/crearProyecto');
const loginRouter=require('./routes/login');
const registroRouter=require('./routes/registro');
const nosotrosRouter=require('./routes/nosotros');
const correoRecRouter=require('./routes/correoRec');
const inversionRouter=require('./routes/inversion');
app.use('/',correoRecRouter);//recuperar contraseña*/
app.use('/',indexRouter);
app.use('/',mensajeriaRouter);
app.use('/',dashboardRouter);
app.use('/',listaProyectosRouter);
app.use('/',verProyectoRouter);
app.use('/',crearProyectoRouter);
app.use('/',loginRouter);
app.use('/',indexRouter);
app.use('/',registroRouter);
app.use('/',nosotrosRouter);
app.use('/',inversionRouter);
