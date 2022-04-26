var botonBuscar = document.querySelector("#busca-paciente");

botonBuscar.addEventListener("click", function(){
    // vamos a extraer informacion de pacientes mediante un api
    var xhr =  new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        // haremos validaciones por si no se puede acceder a la url
        if(xhr.status == 200){
            // almacenamos la informacion obtenida de nuestra api
            var respuesta = xhr.responseText
    
            // convertimos nuestros datos en una lista
            var pacientes = JSON.parse(respuesta);
    
            // creamos un ciclo forEach para extraer la informacion de paciente por paciente
            pacientes.forEach(function(paciente){  
                // llamamos a nuestra funcion para que adicione el paciente a nuestra tabla
                adicionarPacienteEnLaTabla(paciente);
            })
        }else{
            console.log(xhr.status)
        }



    });
    xhr.send()

});