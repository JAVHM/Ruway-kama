window.addEventListener("DOMContentLoaded", init)

function init() {
    const volverBtn = document.getElementById("volver-btn")

    volverBtn.addEventListener("click", volver);

    function volver() {
        window.history.back()
    }
}
