
const confirmar = () => {
    if(confirm("Desea crear un torneo?"))
	{
        return true;
	}
	else
	{
        return false;
	}
}


const main = async () =>{
    document.getElementById("modal_but_grabar").addEventListener("click", confirmar);
}
window.addEventListener("load", main)