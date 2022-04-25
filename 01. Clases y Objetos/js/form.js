var botonAdisionar = document.querySelector("#adicionar-paciente");
botonAdisionar.addEventListener("click", function(event) {
    event.preventDefault(); // evitamos que la pagina se refresque

    var form = document.querySelector("#form-adicionar");

    var tabla = document.querySelector("#tabla-pacientes");

    var paciente = CapturarDatosPaciente(form);

    // creamos un nuevo apartado para almacenar ahi la informacion
    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");


    // asociamos los td y tr a los valores
    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = calcularIMC(paciente.peso, paciente.altura);

    // almacenamos los valores al tr 
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // mandamos a la tabla los tr
    tabla.appendChild(pacienteTr);
});

function CapturarDatosPaciente(form) {
     
    // obtenemos los valores del form mediante una clase
     var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
     }

     // retornamos los valores
     return paciente;
}