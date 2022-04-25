var botonAdisionar = document.querySelector("#adicionar-paciente");
botonAdisionar.addEventListener("click", function(event) {
    event.preventDefault(); // evitamos que la pagina se refresque

    var form = document.querySelector("#form-adicionar");

    var paciente = CapturarDatosPaciente(form);  
    
    var pacienteTr = construirTr(paciente);

    var tabla = document.querySelector("#tabla-pacientes");
    // mandamos a la tabla los tr
    tabla.appendChild(pacienteTr);

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

function construirTr(paciente){
    // creamos un nuevo apartado para almacenar ahi la informacion
    var pacienteTr = document.createElement("tr");
    var nombreTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");


    // asociamos los td y tr a los valores
    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    // almacenamos los valores al tr 
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr
}