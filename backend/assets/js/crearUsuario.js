window.addEventListener("load", function(event) {
    document.getElementById('equipo').style.display = 'none';
});

function checkearEquipo() {
    if (document.getElementById('Lider').checked) {
        document.getElementById('equipo').style.display = 'block';
    } else {
        document.getElementById('equipo').style.display = 'none';
    }
}
document.getElementById("Administrador").addEventListener("click", checkearEquipo);
document.getElementById("Organizador").addEventListener("click", checkearEquipo);
document.getElementById("Lider").addEventListener("click", checkearEquipo);