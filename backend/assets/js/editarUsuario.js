window.addEventListener("load", function(event) {
    document.getElementById("rol").setAttribute("style","display:none");
    rol=document.getElementById("rol").innerText;
    if(rol=="Administrador"){
        document.getElementById("Administrador").checked = true;
    }
    if(rol=="Organizador"){
        document.getElementById("Organizador").checked = true;
    }
    if(rol=="Lider"){
        document.getElementById("Lider").checked = true;
    }
});