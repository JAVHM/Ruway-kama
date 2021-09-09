const express = require('express')
const session = require('express-session')
const bcryptjs = require('bcryptjs')
const { getTorneos, getTorneo, updateTorneo, createTorneo,verificarTorneoNombre,getTorneoFiltro,getTorneoPorNombre,addEquipo_toTorneo} = require('./models/dao_torneos')
const { getJuegos, getJuego } = require('./models/dao_juegos')
const { getEquipos, getEquipo, createEquipo, getEquipoPorLider, editEquipo,buscarNombreEquipo } = require('./models/dao_equipos')
const { getResultados, getResultado } = require('./models/dao_resultados')
const { getPartidos, getPartido, crearPartido, updatePartidoGanador, generarPartidosTCT} = require('./models/dao_partidos')
const { getUsuariosNombre, getUsuariosFiltro, getUsuariosP, editUsuario, getUsuarios, getUsuario, sendEmailCreacion, createUsuario, sendEmailRecuperar,verificarCorreo } = require('./models/dao_usuarios')
const { getRondas, getRonda, getRondaByTorneo, createRonda, getOrdinales} = require('./models/dao_rondas')
const daoTE = require('./models/dao_torneo_equipos')
const daoTP = require('./models/dao_torneo_partidas')
const bodyParser = require('body-parser')
const dao_torneos = require('./models/dao_torneos')
const e = require('express')
const dao = require('./models/dao_torneo_equipos')
const { getNumParticipante_Torneo_equipo } = require('./models/dao_torneo_equipos')
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'assets'))) // configurar archivos estaticos
app.set('view engine', 'ejs') // configurar ejs template
app.set('views', path.join(__dirname, '/views')) 
app.use(bodyParser.json()) // para trabajar con formularios 
app.use(bodyParser.urlencoded({
    extended: true
})) // para trabajar con formularios
app.use(session({
    secret: "123456789",
    resave: false,
    saveUninitialized: false,
})) // configurando el manejo de sesiones

app.get('/', (req, res) => {
    res.render('principal', {
        rol: req.session.rol
    })
})
// app.get('/listaTorneos', async (req, res) => {
//     const listaTorneos = await getTorneos()
//     res.render('listaTorneos', {
//         torneo: listaTorneos,
//         rol: req.session.rol
//     })
// })
app.get('/listaTorneos/:page', async (req, res) => {
    
    const perPage = 5;
    const page = req.params.page || 1
    const listaTorneos = await getTorneos(perPage, page)
    const lTorneos = await listaTorneos.torneos
    const pages =await  listaTorneos.pages
    const current = await listaTorneos.current
    const torneo_numP  =await dao.getNumParticipante_Torneo_equipo()
    
    let eTorneo=await [{ id_e: -1, id_t: -1, inscrito: true }];

    if(req.session.rol=="Lider"){
        console.log("req.session.u_id es usuario lider, su ID es: ", parseInt(req.session.u_id))
        eTorneo=await dao.getTorneoInscripcion(parseInt(req.session.u_id),lTorneos)
    }else{
        console.log("req.session.u_id no es usuario lider")
        eTorneo=await [{ id_e: -1, id_t: -1, inscrito: true }];
    }
    
    res.render('listaTorneos', {
        torneo: lTorneos,
        eTorneo: eTorneo,
        pages: pages,
        current: current,
        rol: req.session.rol,
        numP : torneo_numP,
    })
})
app.post('/listaTorneos/getTorneo', async (req, res) => {
    const torneo = {
        id : req.body.t_id
    }
    const incripcionEquipoTorneo = await addEquipo_toTorneo(parseInt(req.session.u_id),torneo)
    res.redirect('/listaTorneos/1')
})
app.post('/listaTorneos/pag/:page', async (req, res) => {
    const perPage=5;
    const page=req.body.page || 1
    const listaTorneos = await getTorneos(perPage,page)
    const lTorneos=  await listaTorneos.torneos
    const pages= await listaTorneos.pages
    const current=  await listaTorneos.current
    const torneo_numP  =await dao.getNumParticipante_Torneo_equipo()
    if(req.session.rol=="Lider"){
        console.log("req.session.u_id es usuario lider, su ID es: ", parseInt(req.session.u_id))
        eTorneo=await dao.getTorneoInscripcion(parseInt(req.session.u_id),lTorneos)
    }else{
        console.log("req.session.u_id no es usuario lider")
        eTorneo=await [{ id_e: -1, id_t: -1, inscrito: true }];
    }
    
    console.log(page)
    //console.log(current);
    //console.log(pages);
    res.render('listaTorneos', {
        torneo: lTorneos,
        eTorneo: eTorneo,
        pages:pages,
        current:current,
        rol: req.session.rol,
        numP : torneo_numP,
        pag:page
    })
})
let filtro="";
app.post('/listaTorneos/filt',async(req,res)=>{
    const perPage = 5;
    const page = req.params.page || 1
    const f=req.body.filtro;
    filtro=f;
    
    const listaTorneosF=await getTorneoFiltro(f,perPage,page);
    const lTorneos = await listaTorneosF.torneosF
    const pages =await  listaTorneosF.pages
    const current = await listaTorneosF.current
    const torneo_numP  =await dao.getNumParticipante_Torneo_equipo()

    //console.log(f);
    //console.log(filtro);
    res.render('listaTorneosFiltro',{
        torneo:lTorneos,
        pages: pages,
        current: current,
        rol: req.session.rol,
        numP : torneo_numP,
    })

})

app.get('/listaTorneos/filt/:page',async(req,res)=>{
    const perPage = 5;
    const page = req.params.page || 1
    const f=filtro;
    const listaTorneosF=await getTorneoFiltro(f,perPage,page);
    const lTorneos = await listaTorneosF.torneosF
    const pages =await  listaTorneosF.pages
    const current = await listaTorneosF.current
    const torneo_numP  =await dao.getNumParticipante_Torneo_equipo()
    //console.log(f);
    res.render('listaTorneosFiltro',{
        torneo:lTorneos,
        pages: pages,
        current: current,
        rol: req.session.rol,
        numP : torneo_numP,
    })

})
app.post('/listaTorneos/nombre/name',async(req,res)=>{
    const nombre=req.body.name;
    const TorneoN=await getTorneoPorNombre(nombre);
    const torneo_numP  =await dao.getNumParticipante_Torneo_equipo();
    console.log(nombre);
    res.render('listaTorneosPorNombre',{
        torneo:TorneoN,
        rol: req.session.rol,
        numP : torneo_numP    
    })
})
app.post('/usuarios/nombre',async(req,res)=>{
    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
    const perPage = 5;
    const page = req.params.page || 1
    const filt=req.body.name;
    const usuariosN=await getUsuariosNombre(filt,perPage,page);
    const lUsuarios = await usuariosN.usuariosF
    const pages =await  usuariosN.pages
    const current = await usuariosN.current

    res.render('listaUsuariosNombre',{
        usuario:lUsuarios,
        rol: req.session.rol,  
        current:current,
        pages:pages,
    })}
})



app.post('/usuarios/filtro',async(req,res)=>{
    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
    const perPage = 5;
    const page = req.params.page || 1
    const f=req.body.filtrar;
    filtro=f;
    
    const listaUsuariosF=await getUsuariosFiltro(f,perPage,page);
    const lUsuarios = await listaUsuariosF.usuariosF
    const pages =await  listaUsuariosF.pages
    const current = await listaUsuariosF.current

    res.render('listaUsuariosFiltro',{
        usuario:lUsuarios,
        pages: pages,
        current: current,
        rol: req.session.rol,
    })
    }
})
app.get('/usuarios/filtro/:page',async(req,res)=>{
    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
    const perPage = 5;
    const page = req.params.page || 1
    const f=filtro;
    const listaUsuariosF=await getUsuariosF(f,perPage,page);
    const lUsuarios = await listaUsuariosF.usuariosF
    const pages =await  listaUsuariosF.pages
    const current = await listaUsuariosF.current
    res.render('listaUsuariosFiltro',{
        usuario:lUsuarios,
        pages: pages,
        current: current,
        rol: req.session.rol,
    })
    }
})
// app.post('/listaTorneos/nombre', async (req, res) => {
//     const tName=req.body.nombre;
//     const t= await getTorneoPorNombre(tName);
//     const listaTorneos = await getTorneos(perPage,page)
//     //console.log(tName);
//     //console.log(t);
//     res.render('listaTorneos', {
//         torneo: t,
//         pages:pages,
//         current:current,
//         rol: req.session.rol
//     })
// })

app.get('/usuarios/:page', async (req, res) => {
    

    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        const perPage = 5;
        const page = req.params.page || 1
        const listaTorneos = await getUsuariosP(perPage, page)
        const lTorneos = await listaTorneos.usuarios
        const pages =await  listaTorneos.pages
        const current = await listaTorneos.current
        res.render('listaUsuarios', {
            usuario: lTorneos,
            pages: pages,
            current: current,
            rol: req.session.rol
        })
        //
        // const listaUsuarios = await getUsuarios()
        // res.render('listaUsuarios', {
        //     usuario: listaUsuarios,
        //     rol: req.session.rol
        // })
    }
})

//LOGIN
app.get('/login', async (req, res) => {
    if (req.session.rol != null) {
        res.render('yalogeado', {
            rol: req.session.rol
        })
    } else {
    res.render('login', {
        rol: req.session.rol
    })}
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
    //Jaime lo borró: res.redirect('/errorFormulario')
})

//LOGOUT
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
})

//Pagina de Error
app.get('/errorFormulario', async (req, res) => {
    res.render('errorFormulario', {
        rol: req.session.rol
    })
})

//Editar Equipo hecho por el Lider
app.get('/editarEquipo', async (req, res) => {
    const usuarioID = req.session.u_id
    const equipo = await getEquipoPorLider(parseInt(usuarioID))

    res.render('editarEquipo', {
        equipo: equipo,
        rol: req.session.rol
    })
})

app.post('/editarEquipo', async (req, res) => {
    const equipoEditado = {
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        listaParticipantes: req.body.listaPar,
        idParticipanteLider: req.body.elid,
    }

    const listaEquipos = await getEquipos()
    const equipoAEditar = await getEquipo(parseInt(req.body.id)) //El equipo original

    if (req.body.nombre == equipoAEditar.nombre) {
        //No se cambio el nombre
        //Se sigue con la actualizacion
        await editEquipo(equipoEditado)
        res.redirect('/')
    } else {
        //Se cambio el nombre
        //Se verifica si el nombre esta disponible
        listaEquipos.forEach((equipoCompara) => {
            if (req.body.nombre == equipoCompara.nombre) {
                //Se encontro un equipo con el mismo nombre
                //Se le envia al error
                res.redirect('/errorFormulario')
            }
        })
        //No se encontro un equipo con el mismo nombre
        await editEquipo(equipoEditado)
        res.redirect('/')
    }
})

//Editar Lider hecho por el Lider
app.get('/editarLider', async (req, res) => {
    const usuarioID = req.session.u_id
    const usuario = await getUsuario(parseInt(usuarioID))

    res.render('editarLider', {
        usuario: usuario,
        rol: req.session.rol
    })
})
app.post('/editarLider', async (req, res) => {
    const usuarioEditado = {
        id: parseInt(req.body.id),
        nombre: req.body.nombre,
        correo: req.body.correo,
        clave: await bcryptjs.hash(req.body.clave, 8),
        rol: "Lider"
    }

    const listaUsuarios = await getUsuarios()
    const usuarioAEditar = await getUsuario(parseInt(req.body.id))


    if (req.body.correo == usuarioAEditar.correo) {
        //No se cambio el correo
        await editUsuario(usuarioEditado)
        res.redirect('/')
    } else {
        //Se cambio el correo
        listaUsuarios.forEach(async (usuarioCompara) => {
            if (req.body.correo == usuarioCompara.correo) {
                //Caso de error
                res.redirect('/errorFormulario')
            }
        })
        //No se encontro otro con mismo correo
        await editUsuario(usuarioEditado)
        res.redirect('/')

    }
})



//Registo del lider y equipo hecha por el lider
app.get('/registro', async (req, res) => {
    res.render('registroLiderEquipo', {
        rol: req.session.rol
    })
})
app.post('/registro', async (req, res) => {
    //El nuevo lider
    const partLider = {
        nombre: req.body.nombre,
        correo: req.body.email,
        clave: await bcryptjs.hash(req.body.clave, 8), //Este es el encriptador.
        // El numero 8 es las veces que se realiza, mientras mas, mas seguro pero mas demora.
        rol: "Lider"
    }
    // y guardado en partLiderNuevo
    //datos no vacios
    const boolPartLider = (partLider.correo==" ") &&  (partLider.nombre==" ") && partLider.clave=="  "
    //El nuevo equipo
    const nombreEquipo = req.body.nomEq
    //Obtener
    const validarCorreo = await verificarCorreo(partLider.correo)
    const validarNombreEquipo = await buscarNombreEquipo(nombreEquipo)
    //console.log("PRUEBA 1 ", a )
    if(boolPartLider==false && validarCorreo == false && validarNombreEquipo ==true && partLider.correo != " "){
        //console.log("NO EXISTE CORREO NI NOMBRE")    
        // Enviar mail
        try{
            await sendEmailCreacion(partLider)    
        }catch(e){
            //console.log(e.name)
        }
        //Creacion de usuario participante y equipo 
        const partLiderNuevo = await createUsuario(partLider)
        const equipo = {
            nombre: req.body.nomEq,
            listaParticipantes: req.body.nombre,
            idParticipanteLider: partLiderNuevo.id,
        }
        const partEquipoNuevo = await createEquipo(equipo)
        // En teoria en este momento el lider ya esta creado
        req.session.rol = partLiderNuevo.rol
        req.session.u_id = partLiderNuevo.id
        res.redirect('/')
    }else{
        //console.log(" CORREO O  USUARIO EXISTE")
        //Mostrar pantalla de alerta
        //Quizas editar esa pantalla para que reciba un mensaje
        res.render('errorFormulario',{
            rol: req.session.rol
        })
    }
})

//Registro de usuarios por el admin
app.get('/usuario/crear', async (req, res) => {
    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        res.render('crearUsuario', {
            rol: req.session.rol
        })
    }
})
app.post('/usuario/crear', async (req, res) => {

    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        nombre = req.body.nombre,
            correo = req.body.correo,
            clave = await bcryptjs.hash(req.body.clave, 8),
            rol = req.body.tipo
        equipo = ""

        //Verificacion de correo electronico
        const listaUsuarios = await getUsuarios()

        listaUsuarios.forEach(async (usuario) => {
            if (req.body.correo == usuario.correo) {
                //Se encontro un usuario con el mismo correo
                res.redirect('/errorFormulario')
            }
        })
        //No se encontro usuario con el mismo correo.

        if (rol == "Lider") {
            equipo = req.body.equipo
            const usuario = {
                nombre: nombre,
                correo: correo,
                clave: clave,
                rol: rol
            }
            const usuarioLider = await createUsuario(usuario)
            const equipoo = {
                nombre: equipo,
                listaParticipantes: nombre,
                idParticipanteLider: usuarioLider.id,
            }
            const EquipoNuevo = await createEquipo(equipoo)
        } else {
            const usuario = {
                nombre: nombre,
                correo: correo,
                clave: clave,
                rol: rol
            }
            const usuarioLider = await createUsuario(usuario)
        }
        res.redirect('/usuarios/1')
    }
})
app.get('/usuario/editar/:id', async (req, res) => {
    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        const usuarioID = req.params.id;
        const usuario = await getUsuario(parseInt(usuarioID));
        res.render('editarUsuario', {
            usuario: usuario,
            rol: req.session.rol
        })
    }
})
app.post('/usuario/editar', async (req, res) => {
    console.log(req.body.u_clave)
    if (req.session.rol != "Administrador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        const usuario = {
            id: parseInt(req.body.u_id),
            nombre: req.body.u_nombre,
            correo: req.body.u_correo,
            clave: await bcryptjs.hash(req.body.u_clave, 8),
            rol: req.body.u_rol
        }

        //Verificacion de correo electronico
        const listaUsuarios = await getUsuarios()
        const usuarioAEditar = await getUsuario(parseInt(req.body.u_id))

        if (req.body.correo == usuarioAEditar.correo) {
            //No se altero el correo

            //Contraseña no editada
            if(req.body.u_clave==""){
                usuario.clave=usuarioAEditar.clave
            }else{
                console.log("XD")
            }
            await editUsuario(usuario)
            res.redirect('/usuarios/1')
        } else {
            //Se altero el correo
            listaUsuarios.forEach(async (usuarioCompara) => {
                if (req.body.correo == usuarioCompara.correo) {
                    //Caso de error
                    res.redirect('/errorFormulario')
                }
            })
            //No se encontro usuario con el mismo correo
            
            //Contraseña no editada
            if(req.body.u_clave==""){
                usuario.clave=usuarioAEditar.clave
            }else{
                console.log("XD")
            }
            await editUsuario(usuario)
            res.redirect('/usuarios/1')
        }
    }
})

//Editar Torneo
app.get('/listaTorneos/editar/:id', async (req, res) => {
    if (req.session.rol != "Organizador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        const torneoID = req.params.id;
        const torneo = await getTorneo(parseInt(torneoID));
        res.render('editarTorneo', {
            torneo: torneo,
            rol: req.session.rol
        })
    }
})

app.post('/listaTorneos/editar', async (req,res) => {
    const torneo = {
        id : parseInt(req.body.t_id),
        nombre : req.body.t_nombre,
        f_ini : req.body.t_f_ini,
        f_fin : req.body.t_f_fin,
        estado: req.body.estado,
        descripcion : req.body.t_descripcion,
        partidasDia : parseInt(req.body.t_partDia),
        puntosPartGanada : parseInt(req.body.t_pGanar),
        puntosPartEmpatada : parseInt(req.body.t_pEmpate),
        puntosPartPerdida : parseInt(req.body.t_pPerder),
        tipoTorneo : req.body.t_tipo,
        cantMax: parseInt(req.body.t_cantMax),
    }
    //console.log("TORNEO ES ", torneo)
    const registradosTorneo = await getNumParticipante_Torneo_equipo()
    var cant=0
    //Buscar cantidad de equipos registrados
    for (let i of registradosTorneo){
        if(i.id_t==torneo.id){
            cant=i.count
        }
    }
    //console.log("cant es ", cant)
    //Verificar DIRECTA y diferente a 16
    if(torneo.estado=="En curso"&& torneo.tipoTorneo=="Directa" && cant<16 ){
        //console.log("caso 1")
        res.render('errorFormulario', {
            rol: req.session.rol
        })
    }else if(torneo.estado=="En curso"&& torneo.tipoTorneo=="TCT" && cant<6 ){
        //Verificar TCT y mayores que 6 
        //console.log("caso 2")
        res.render('errorFormulario', {
            rol: req.session.rol
        })
    }else{
        //console.log("caso general")
        await updateTorneo(torneo)
        res.redirect('/listaTorneos/1')
    }
})

//Crear Torneo
app.get('/crearTorneo', async (req, res) => {
    if (req.session.rol != "Organizador") {
        res.render('noPermiso', {
            rol: req.session.rol
        })
    } else {
        const listaJuegos = await getJuegos();
        res.render('crearTorneo', {
            juego : listaJuegos,
            rol: req.session.rol
        })
    }
})

app.post('/crearTorneo', async (req, res) =>{
    const torneo = {
        nombre : req.body.t_nombre,
        f_ini : req.body.t_f_ini,
        f_fin : req.body.t_f_fin,
        descripcion : req.body.t_descripcion,
        cantMax : parseInt(req.body.t_cantMax),
        tipoTorneo : req.body.t_tipo,
        idJuego : parseInt(req.body.t_juego),
        partidasDia : parseInt(req.body.t_partDia),
        puntosPartGanada : parseInt(req.body.t_pGanar),
        puntosPartEmpatada : parseInt(req.body.t_pEmpate),
        puntosPartPerdida : parseInt(req.body.t_pPerder),
        estado : 'Abierto'
    }
    const boolTorneoNombre= await verificarTorneoNombre(torneo.nombre)
    if(boolTorneoNombre==false && torneo.nombre!=" "){
        //FALSE = NO EXISTE NOMBRE TORNEO
        //console.log("VERIFICAR ES FALSO")
        const tGuardado = await createTorneo(torneo);
        res.redirect('/listaTorneos/1')
    }else{
        //TRUE = EXISTE  NOMBRE TORNEO
        //console.log("VERIFICAR ES VERDADERO")
        res.redirect('errorFormulario')
    }
})


// app.get('/iniciarSesion', async (req, res) => {
//     res.render('iniciarSesion', {
//         rol: req.session.rol
//     })
// })
app.get('/crearEquipo', async (req, res) => {
    res.render('crearEquipo', {
        rol: req.session.rol
    })
})

app.get('/nosotros', async (req, res) => {
    res.render('nosotros', {
        rol: req.session.rol
    })
})



app.get('/verTorneo/:id', async (req, res) => {

    const tId = req.params.id;
    const t = await getTorneo(parseInt(tId));
    const listaRondas = await getRondas(parseInt(tId))
    //console.log("t.id: ", t.id)
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    //const listaTorneo_Equipos = await daoTE.getTorneo_Equipos()
    //console.log(listaTorneo_Equipos)
    listaOrdinales = await getOrdinales(listaRondas)

    res.render('verTorneo', {
        torneo: t,
        rondas: listaRondas,
        ordinal : listaOrdinales,
        Torneo_Equipo: listaTorneo_Equipos,
        rol: req.session.rol
    })
})

app.get('/verRonda/Torneo:idt/Ronda:idr', async (req, res) => {

    const rId = req.params.idr;
    const tId = req.params.idt;
    const r = await getRonda(parseInt(rId));
    const t = await getTorneo(parseInt(tId))
    const listaPartidos = await getPartidos(parseInt(rId))

    res.render('verRonda', {
        rol: req.session.rol,
        torneo: t,
        ronda: r,
        partido : listaPartidos
    })
})
app.post('/verRonda/Torneo:idt/Ronda:idr', async (req, res) => {
    const p = {
        id : parseInt(req.body.p_id),
        ganador : parseInt(req.body.p_resultado)
    }
    await updatePartidoGanador(p.id, p.ganador)
    res.redirect('back')
})

//posiciones
app.get('/listaPosiciones/Torneo:id', async (req, res) =>{
    const tId = req.params.id;
    const t = await getTorneo(parseInt(tId));
    const listaRondas = await getRondas(parseInt(tId))
    //console.log("t.id: ", t.id)
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    const listaTorneo_Partidas = await daoTP.getTorneo_Partidas_ByTorneo(t)
    //const listaTorneo_Equipos = await daoTE.getTorneo_Equipos()
    console.log(listaTorneo_Partidas)

    res.render('listaPosiciones',{
        torneo : t,
        rondas: listaRondas,
        Torneo_Equipo: listaTorneo_Equipos,
        Torneo_Partida: listaTorneo_Partidas,
        rol: req.session.rol
    })
})

app.get('/listaPosicionesTCT/Torneo:id', async (req, res) =>{
    const tId = req.params.id;
    const t = await getTorneo(parseInt(tId));
    const listaRondas = await getRondas(parseInt(tId))
    //console.log("t.id: ", t.id)
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    const listaTorneo_Partidas = await daoTP.getTorneo_Partidas_ByTorneo(t)
    //const listaTorneo_Equipos = await daoTE.getTorneo_Equipos()
    //console.log(listaTorneo_Equipos)

    res.render('listaPosicionesTCT',{
        torneo: t,
        rondas: listaRondas,
        Torneo_Equipo: listaTorneo_Equipos,
        Torneo_Partida: listaTorneo_Partidas,
        rol: req.session.rol
    })
})


app.get('/verRondaTCT/Torneo:idt/RondaTCT:idr', async (req, res) => {

    const rId = req.params.idr;
    const tId = req.params.idt;
    const r = await getRonda(parseInt(rId));
    const t = await getRonda(parseInt(tId));
    const listaPartidos = await getPartidos(rId)
    

    res.render('verRondaTCT', {
        rol: req.session.rol,
        torneo: t,
        ronda: r,
        partido : listaPartidos
    })
})
app.post('/verRondaTCT/Torneo:idt/RondaTCT:idr', async (req, res) => {
    const p = {
        id : parseInt(req.body.p_id),
        ganador : parseInt(req.body.p_resultado)
    }
    console.log('Partido ID: ',p.id)
    console.log('Ganador ID: ', p.ganador)
    await updatePartidoGanador(p.id, p.ganador)
    res.redirect('/listaTorneos/1')
})
app.get('/verEquipo/:id', async (req, res) => {
    const eId = req.params.id;
    const e = getEquipo(parseInt(eId));
    let e2 = e

    const listaEquipos = getEquipos()
    const listaUsuarios = getUsuarios()

    e.then(function (result) {
        //console.log(result)
        e2 = result
        res.render('verEquipo', {
            equipo: e2,
            usuario: listaUsuarios,
            rol: req.session.rol
        })
    })
})

app.get('/crearPartido/Torneo:idt/Ronda:idr', async (req, res) => {
    const rId = req.params.idr; //console.log('Ronda id: ', rId )
    const tId = req.params.idt; //console.log('Torneo id: ', tId )
    const r = await getRonda(parseInt(rId))
    const t = await getTorneo(parseInt(tId))
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    //console.log(listaTorneo_Equipos)
    res.render('crearPartido', {
        torneo : t,
        ronda : r,
        equipo : listaTorneo_Equipos,
        rol: req.session.rol
    })
})
app.post('/crearPartido/Torneo:idt/Ronda:idr', async (req, res) => {
    const rId = req.params.idr; //console.log('Ronda id: ', rId )
    const tId = req.params.idt; //console.log('Torneo id: ', tId )
    const r = await getRonda(parseInt(rId))
    const t = await getTorneo(parseInt(tId))
    const partido = {
        id_e1 : req.body.p_e1,
        id_e2 : req.body.p_e2,
        idRonda : rId
    }
    const partidoGuardado = await crearPartido(partido);
    //console.log(partidoGuardado)
    res.redirect('/listaTorneos/1')
})
app.get('/crearRonda/Torneo:idt', async (req, res) => {
    const tId = req.params.idt; //console.log('Torneo id: ', tId )
    const t = await getTorneo(parseInt(tId))
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    //console.log(listaTorneo_Equipos)
    res.render('crearRonda', {
        torneo : t,
        Torneo_Equipo : listaTorneo_Equipos,
        rol: req.session.rol
    })
})
app.post('/crearRonda/Torneo:idt', async (req, res) => {
    const tId = req.params.idt; //console.log('Torneo id: ', tId )
    const t = await getTorneo(parseInt(tId))
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    const ronda = {
        nombre : req.body.r_nombre,
        n_cor : req.body.r_n_cor,
        n_par : 999,
        f_ini : req.body.r_f_ini,
        estado : "FIX",
        idTorneo : t.id
    }
    const repeticiones = req.body.repeticiones
    const rondaGuardada = await createRonda(ronda)
    res.redirect('/listaTorneos/1')
})
app.get('/crearRondaTCT/Torneo:idt', async (req, res) => {
    const tId = req.params.idt; //console.log('Torneo id: ', tId )
    const t = await getTorneo(parseInt(tId))
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    //console.log(listaTorneo_Equipos)
    res.render('crearRondaTCT', {
        torneo : t,
        Torneo_Equipo : listaTorneo_Equipos,
        rol: req.session.rol
    })
})
app.post('/crearRondaTCT/Torneo:idt', async (req, res) => {
    const tId = req.params.idt; //console.log('Torneo id: ', tId )
    const t = await getTorneo(parseInt(tId))
    const listaTorneo_Equipos = await daoTE.getTorneo_Equipos_ByTorneo(t)
    const ronda = {
        nombre : req.body.r_nombre,
        n_cor : req.body.r_n_cor,
        n_par : 999,
        f_ini : req.body.r_f_ini,
        estado : "FIX",
        idTorneo : t.id
    }
    const repeticiones = req.body.repeticiones
    const rondaGuardada = await createRonda(ronda)
    //Cuando crees una RondaTCT se crea automaticamente con los equipos los partidos
    await generarPartidosTCT(listaTorneo_Equipos, rondaGuardada, repeticiones)
    res.redirect('/listaTorneos/1')
})
app.get('/verUsuario/:id', async (req, res) => {
    const uId = req.params.id;
    const u = getUsuario(parseInt(uId));
    let u2 = u

    u.then(function (result) {
        //console.log(result)
        u2 = result
        res.render('verUsuario', {
            usuario: u2,
            rol: req.session.rol
        })
    })
})

app.get('/verPartido/:id', async (req, res) => {
    const pId = req.params.id;
    const p = getPartido(parseInt(pId));
    let p2 = p

    p.then(function (result) {
        //console.log(result)
        p2 = result
        res.render('verPartido', {
            partido: p2,
            rol: req.session.rol
        })
    })
})
app.get('/password-email', async (req, res) => {
    res.render('PantallaSolicitar', {
        rol: req.session.rol
    })
})
app.post('/password-email', async (req, res) => {
    const email = req.body.email
    //console.log("Correo a resetear", email)
    sendEmailRecuperar(email)
    res.redirect('/')
})
app.get('/password/reset/:id/:token', (req, res) => {
    const idUsuario = parseInt(req.params.id)
    res.render('ClaveOlvidada', {
        id: idUsuario,
        rol: req.session.rol
    })
})
app.post('/password/reset/:id/:token', async (req, res) => {
    const idUsuario = req.params.id
    const usuario = await getUsuario(idUsuario)
    const nuevaClave = req.body.clave
    //GENERAR "USUARIO" A CHANCAR
    const NuevoUsuario = {
        id: idUsuario,
        nombre: usuario.nombre,
        correo: usuario.correo,
        clave: await bcryptjs.hash(nuevaClave, 8),
        rol: usuario.rol
    }
    //console.log(NuevoUsuario)
    editUsuario(NuevoUsuario)
    res.redirect('/')
})
app.get('/verPerfil', async (req,res) =>{
    const idSesion = req.session.u_id
    //console.log("Ide usuario ", idSesion)
    const temp1 = parseInt(idSesion)
    const partLider =  getUsuario(temp1)
    res.render('miPerfil',{
        rol: req.session.rol,
        usuario: partLider
    })
})

app.listen(PORT, () => {
    //console.log(`Servidor ejecutandose en el puerto ${PORT}`)
})