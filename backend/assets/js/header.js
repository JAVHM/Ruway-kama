window.addEventListener("load", function(event) {
    //document.getElementById("h_rol").setAttribute("style","display:none");
    rol=document.getElementById("h_rol").innerText;
    //LOGIN
    login=document.getElementById("h_login");
    if(rol==""){
        login.setAttribute("style","display:");
    }else{
        login.setAttribute("style","display:none");
    }
    //LOGOUT
    logout=document.getElementById("h_logout");
    if(rol==""){
        logout.setAttribute("style","display:none");
    }else{
        logout.setAttribute("style","display:");
    }
    //REGISTRO
    registro=document.getElementById("h_registro");
    if(rol==""){
        registro.setAttribute("style","display:");
    }else{
        registro.setAttribute("style","display:none");
    }
    //USUARIOS
    usuarios=document.getElementById("h_usuarios");
    if(rol=="Administrador"){
        usuarios.setAttribute("style","display:");
    }else{
        usuarios.setAttribute("style","display:none");
    }
    const miPerfil = document.querySelector("#h_perfil");
    const miEquipo = document.querySelector("#h_miEquipo") ;
    if(rol=="Lider"){
        miPerfil.setAttribute("style","display:")
        miEquipo.setAttribute("style","display:")
    }else{
        miPerfil.setAttribute("style","display:none")
        miEquipo.setAttribute("style","display:none")
    }
});

function test() {
    //console.log("hello world")
}
