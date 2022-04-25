var botonAdisionar = document.querySelector("#adicionar-paciente");
botonAdisionar.addEventListener("click", function(event) {
    event.preventDefault(); // evitamos que la pagina se refresque

    // obtenemos los valores del forms
    var form = document.querySelector("#form-adicionar");
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes");

    // creamos un nuevo apartado para almacenar ahi la informacion
    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");


    // asociamos los td y tr a los valores
    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso, altura);

    // almacenamos los valores al tr 
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // mandamos a la tabla los tr
    tabla.appendChild(pacienteTr);


});