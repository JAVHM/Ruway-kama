const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();


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
const adminUsuario=require('./routes/adminUsuario');
const editarProyecto=require('./routes/editarProyecto');
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
app.use('/',adminUsuario);
app.use('/',editarProyecto);
app.get('/ping', async (req, res) =>{
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
});
router.post('/deleteNotif', (req, res) => {
    let id_p = parseInt(req.body.nID);
    deleteNotificacion(id_p)
    res.redirect('/');
})
const pg = require('pg');
const {config} = require('dotenv');

config()

const pool = new pg.Pool({
    connectionString: process.env.DARABASE_URL,
    ssl: true,
    dialect: "postgres",
    host: "dpg-ciifr9lph6erq6ggi0hg-a.oregon-postgres.render.com",
    port: 5432,
    database: "ruwaykama",
    user: "ruwaykama_user",
    password: "hgAvcqBDWkcCPrTGz4h7yg6VntAq0rfH",
})

async function getTables() {
    try {
      const client = await pool.connect();
      const result = await client.query(
        "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
      );
      const tables = result.rows.map((row) => row.table_name);
      client.release();
      return tables;
    } catch (error) {
      console.error('Error al obtener las tablas:', error);
      return [];
    }
  }
  
  app.get('/tables', async (req, res) => {
    const tables = await getTables();
    return res.json(tables);
  });