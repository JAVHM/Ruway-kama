document.getElementById('button-addon2').addEventListener('click', function () {
     const filtro = document.getElementById('filtro').value.toLowerCase();
     const filas = document.querySelectorAll('#tabla tbody tr');
   
     filas.forEach(function (fila) {
       const id = fila.querySelector('td:nth-child(2)').textContent.toLowerCase();
       if (id.includes(filtro)) {
         fila.style.display = '';
       } else {
         fila.style.display = 'none';
       }
     });
   });
   