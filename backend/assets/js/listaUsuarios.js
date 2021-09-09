function buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("buscador");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablita");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
        //nombre
        td = tr[i].getElementsByTagName("td")[1];
        //correo
        td2 = tr[i].getElementsByTagName("td")[2];
        if (td&&td2) {
            txtValue = td.textContent || td.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1||txtValue2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }
        }
  }

  document.getElementById("buscador").addEventListener("keyup",buscar)

  function filtrar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filtrar");
    filter = input.value.toUpperCase();
    table = document.getElementById("tablita");
    tr = table.getElementsByTagName("tr");
    if(filter=="TODOS"){
        for (i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
        }   
        return 0;
    }
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }
        }
  }
  document.getElementById("filtrar").addEventListener("change",filtrar)