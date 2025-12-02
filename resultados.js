window.addEventListener("DOMContentLoaded",function(){
    //Obtener los parametros de la URL enviados por el Form
    const urlParams=new URLSearchParams(window.location.search);
    //extraer los parametros de la URL y guardarlos en contactos
    const nombre = urlParams.get("nombre");
    const cedula = urlParams.get("cedula");
    const email = urlParams.get("email");
    const telefono = urlParams.get("telefono");
    const tipoExamen = urlParams.get("tipoexamen");
    const fechaExamen = urlParams.get("fechaexamen");

    //Verificar si hay datos
    if (nombre && cedula && email && telefono && tipoExamen && fechaExamen){
        const elementoNombre = document.getElementById("mostrarnombre");
        const elementoCedula = document.getElementById("mostrarcedula");
        const elementoEmail = document.getElementById("mostraremail");
        const elementoTelefono = document.getElementById("mostrartelefono");
        const elementoTipoExamen = document.getElementById("mostrartipoexamen");
        const elementoFechaExamen = document.getElementById("mostrarfechaexamen");

        elementoNombre.textContent = decodeURIComponent(nombre);
        elementoCedula.textContent = decodeURIComponent(cedula);
        elementoEmail.textContent = decodeURIComponent(email);
        elementoTelefono.textContent = decodeURIComponent(telefono);
        elementoTipoExamen.textContent = decodeURIComponent(tipoExamen);
        elementoFechaExamen.textContent = decodeURIComponent(fechaExamen);
    }else{
        this.alert("No se encontraron datos");
    }
});
function Volveralformulario(){
    window.location.href="index.html";
}