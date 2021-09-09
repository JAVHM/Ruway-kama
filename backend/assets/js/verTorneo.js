var presionado = 0

const verEquipo = (i) =>{
    console.log("valor de i ", i)
    const listaIntegrante =document.getElementById(`td_lista${i}`)
    const but_verEquipo  = document.getElementById(`but_verEquipo${i}`)
    // console.log("Lista a edita r ", listaIntegrante)
    // console.log("botn_equipo ", but_verEquipo)
    if(presionado==0){
        //Mostrar integrantes
        //console.log("Mostrar")
        try{
            listaIntegrante.removeAttribute("hidden");
            //listaIntegrante.setAttribute("style","display:");
            but_verEquipo.innerHTML="ocultar integrantes"
        }catch(e){
            console.log(e.message)
        }
        presionado =1
    }else if(presionado==1){   
        //Desocultar integrantes
        //console.log("Ocultar")
        try{
            listaIntegrante.setAttribute("hidden", true)
            //listaIntegrante.setAttribute("style","display:none");
            but_verEquipo.innerHTML="Ver equipo"
        }catch(e){
            console.log(e.message)
        }
        presionado = 0
    }
}
var contador=0
const total=parseInt(document.querySelector("#contador").innerHTML)
const listaBotones =document.querySelectorAll("b.VerE")

console.log(total)


 for(var i=0; i<total; i++){
     const insertar =contador
     const boton_equipo =document.getElementById(`but_verEquipo${i}`)
     boton_equipo.addEventListener("click", ()=>{
         verEquipo(insertar)
     })
    //  console.log("valor iterracione", i )
    //  console.log("insertar en esta iteraccib es : " ,insertar)
    //  console.log("contador es ",  contador )
    //  console.log("boton ", boton_equipo )
     contador++
 }
// listaBotones.forEach((item)=>{
//     const boton_equipo =document.querySelector(`#td_lista${contador}`)
//     boton_equipo.addEventListener("click", ()=>{
//         verEquipo(i)
//     })
//     contador++
// })

// for(var i=0; i<total; i++){
//     const but_verEquipo  = document.querySelector(`#but_verEquipo${i}`)
//     listaBotones[i].addEventListener("click", function(){
//         verEquipo(i)
//     })
// }     
// listaBotones.forEach((e)=>{
//     console.log("mop")
//     e[contador].addEventListener("click", ()=>{
//         verEquipo(contador)
//     })
// })