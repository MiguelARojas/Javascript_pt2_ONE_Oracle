var campoFiltro = document.querySelector("#filtrar-tabla");

// hacemos que tome lo del input
campoFiltro.addEventListener("input", function(){
    // traemos todos nuestros pacientes
    var pacientes = document.querySelectorAll(".paciente");

    // hacemos una iteracion para extraer nada mas los nombres
    for(var i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var tdNombre = paciente.querySelector(".info-nombre");
        var nombre = tdNombre.textContent;
        console.log(nombre);
    }
});