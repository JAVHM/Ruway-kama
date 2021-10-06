const express = require('express');
const app = express();
const path = require('path');
const bcryptjs = require('bcryptjs');
const { getUsuarios, createUsuario } = require('./models/dao_usuario')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'assets')))

app.listen(3000, () => {
    console.log('Servidor funcional en http://localhost:3000')
});

app.get("/", (req, res) => {
    res.render('index');
})


app.get("/mensajeria", (req, res) => {
    res.render('mensajeria')
})

app.get("/verProyecto", (req, res) => {
    res.render('verProyecto')
})

app.get("/crearProyecto", (req, res) => {
    res.render('crearProyecto')
})

//LOGIN
app.get('/login', async (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const correoLogin = req.body.correo
    const claveLogin = req.body.clave
    const listaUsuarios = await getUsuarios()

    listaUsuarios.forEach((usuario) => {
        //Encontrar al usuario con el mismo correo
        if (correoLogin == usuario.correo) {
            //Se encontro al usuario con el correo
            //Asi que se verifica la clave
            let compare = bcryptjs.compareSync(claveLogin, usuario.clave)
            if (compare) { //Booleano
                //La clave es correcta
                //Finalmente se guarda el usuario completo en la session
                req.session.rol = usuario.rol
                req.session.u_id = usuario.id
                console.log("req.session.rol: ", req.session.rol)
                console.log("req.session.u_id: ", req.session.u_id)
                res.redirect('/')
            } else {
                //La clave es incorrecta
                res.redirect('/errorFormulario')
            }

        }
    })
    //Si sale del forEach, no se encontro a un usuario con el mismo correo
    //Entones seria un caso de fallo.
    res.redirect('/errorFormulario')
})

//REGISTRO
app.get('/registro', async (req, res) => {
    res.render('registro')
})

app.post('/registro', async (req, res) => {
    //El nuevo usuario
    const usuarioDatos = {
        nombre: req.body.nombre,
        contraseña: await bcryptjs.hash(req.body.contrasena, 8), //Este es el encriptador.
        // El numero 8 es las veces que se realiza, mientras mas, mas seguro pero mas demora.
        correo: req.body.email,
    }

    //Verificando si el correo es unico
    const listaUsuarios = await getUsuarios()
    listaUsuarios.forEach(async (usuario) => {
        if (req.body.correo == usuario.correo) {
            //Se encontro un usuario con el mismo correo
            res.redirect('/errorFormulario')
        }
    })
    //No se encontro usuario con el mismo correo.

    const usuarioNuevo = await createUsuario(usuarioDatos)

    //Deberia mandar al main aqui
    res.redirect('')
})