var botonAdisionar = document.querySelector("#adicionar-paciente");

// boton de enviar
botonAdisionar.addEventListener("click", function(event) {
    event.preventDefault(); // evitamos que la pagina se refresque

    var form = document.querySelector("#form-adicionar");
    var paciente = CapturarDatosPaciente(form);     
    var pacienteTr = construirTr(paciente);
    
    var errores = validarPaciente(paciente);
    // aqui validamos que el mensaje te error tenga caracteres
    if(errores.length > 0){
        exhibirMensajes(errores)
        return;
    }

    var tabla = document.querySelector("#tabla-pacientes");
    // mandamos a la tabla los tr
    tabla.appendChild(pacienteTr);
    // hacemos que se borre lo de nuestro form
    form.reset();

});

function CapturarDatosPaciente(form) {
     
    // obtenemos los valores del form mediante una clase
     var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
     }

     // retornamos los valores
     return paciente;
}

// creamos la funcion para que cree los espacios donde se colocara 
function construirTr(paciente){
    // creamos un nuevo apartado para almacenar ahi la informacion
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // almacenamos los valores al tr y adicionamos las clases para mantener la estructura de nuestro html
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr
}

// creamos la funcion de crear td para que sea mas facil el codigo
function construirTd(dato,className){

    var td = document.createElement("td");
    td.classList.add(className);
    td.textContent = dato;

    return td
}

function validarPaciente(paciente){
    var errores = []

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacío")
    }else if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacío")
    }else if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacía")
    }else if(paciente.gordura.length == 0){
        errores.push("La gordura no puede estar vacía")
    }

    if(!validarPeso(paciente.peso)){
        return errores.push("El peso del paciente es incorrecto");
    }else if(!validarAltura(paciente.altura)){
        return errores.push("La altura del paciente es incorrecto");
    }
    return errores;    
}

function exhibirMensajes(errores){
    var ul = document.querySelector("#mensajes-errores");

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error
        ul.appendChild(li)
    })

}