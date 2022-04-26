var botonBuscar = document.querySelector("#busca-paciente");

botonBuscar.addEventListener("click", function(){
    // vamos a extraer informacion de pacientes mediante un api
    var xhr =  new XMLHttpRequest;
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
        // creamos una variable donde lo conectamos a nuestro span donde se mostrara el mensaje
        var errorAjax = document.querySelector("#error-ajax");

        // haremos validaciones por si no se puede acceder a la url
        if(xhr.status == 200){
            // si el status es correcto que nos oculte los mensajes
            errorAjax.classList.add("invisible");
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
            // caso contrario me muestre el mensaje si paso un error
            errorAjax.classList.remove("invisible");
            console.log(xhr.status)
        }



    });
    xhr.send()

});