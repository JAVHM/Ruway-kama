function alerta() {
    alert("El ganador ha sido actualizado");
    console.log("XD?")
}
function test(){
    console.log("test")
}
const btn = document.querySelectorAll('.boton_submit');
btn.forEach(el => el.addEventListener('click', alerta));