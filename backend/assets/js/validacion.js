window.onload = function() {
    var checkbox = document.getElementById("condiciones");
    var boton = document.getElementById("boton_registrarse");

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            console.log("Checkbox is checked..");
            document.getElementById("mensaje").innerHTML = "";
            
        } else {
            console.log("Checkbox is not checked..");
            document.getElementById("mensaje").innerHTML = "Debes aceptar los terminos y condiciones :(";
        }
    });

    boton.addEventListener("click", (e) => {
        if (checkbox.checked) {
            console.log("Checkbox is checked..");
            document.getElementById("mensaje").innerHTML = "";
            //document.getElementById("boton_registrarse").disabled = false;
        } else {
            console.log("Checkbox is not checked..");
            document.getElementById("mensaje").innerHTML = "Debes aceptar los terminos y condiciones :(";
            e.preventDefault();
            //document.getElementById("boton_registrarse").disabled = true;

        }
    })
}