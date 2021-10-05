const express = require('express');
const app = express();
const path = require('path');
const bcryptjs = require('bcryptjs');

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
})

//REGISTRO
app.get('/registro', async (req, res) => {
    res.render('registroLiderEquipo')
})

app.post('/registro', async (req, res) => {
    //El nuevo usuario
    const partLider = {
        nombre: req.body.nombre,
        correo: req.body.email,
        clave: await bcryptjs.hash(req.body.clave, 8), //Este es el encriptador.
        // El numero 8 es las veces que se realiza, mientras mas, mas seguro pero mas demora.
        rol: req.body.tipo_cuenta,
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

    const usuario = {
        nombre: nombre,
        correo: correo,
        clave: clave,
        rol: rol
    }
    const usuarioNuevo = await createUsuario(usuario)

    //Deberia mandar al main aqui
    res.redirect('')
})