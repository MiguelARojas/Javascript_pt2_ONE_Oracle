var campoFiltro = document.querySelector("#filtrar-tabla");

// hacemos que tome lo del input
campoFiltro.addEventListener("input", function () {
    // traemos todos nuestros pacientes
    var pacientes = document.querySelectorAll(".paciente");

    // comprobamos que este algo escrito en el input
    if (this.value.length > 0) {
        // hacemos una iteracion para extraer nada mas los nombres
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            // se esta usando expresion regulares para comparar el nombre y el entorno no diferencie entre mayusculas y minusculas
            var expresion = new RegExp(this.value, "i")

            // hacemos una comprobacion si encuentra el nombre
            if (!expresion.test(nombre)) {
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
        }
    }else{
        // hacemos una segunda iteracion para que si no hay nada escrito me quite mi clase invisible
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }



});