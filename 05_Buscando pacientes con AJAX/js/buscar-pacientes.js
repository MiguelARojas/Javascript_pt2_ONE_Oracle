var botonBuscar = document.querySelector("#busca-paciente");

botonBuscar.addEventListener("click", function(){
    // vamos a extraer informacion de pacientes mediante un api
    var xhr =  new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        // almacenamos la informacion obtenida de nuestra api
        var respuesta = xhr.responseText

        var pacientes = JSON.parse(respuesta);
    });
    xhr.send()

});