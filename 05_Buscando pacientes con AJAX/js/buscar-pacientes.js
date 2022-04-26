var botonBuscar = document.querySelector("#busca-paciente");

botonBuscar.addEventListener("click", function(){
    // vamos a extraer informacion de pacientes mediante un api
    var xhr =  new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        // mostramos la informacion obtenida mediante la api
        console.log(xhr.responseText)
    });
    xhr.send()

});