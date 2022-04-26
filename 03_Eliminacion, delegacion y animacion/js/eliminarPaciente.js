var tabla = document.querySelector("#tabla-pacientes")

tabla.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500); 
});


// De esta manera no elimina a los pacientes agregados solo los que ya se encuentran por default
// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){
//         this.remove();
//     });
// });