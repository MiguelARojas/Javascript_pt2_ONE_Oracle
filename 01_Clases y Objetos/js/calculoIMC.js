// obtenemos los valores de los pacientes
var pacientes = document.querySelectorAll('.paciente');


// iteramos para que se calcule en manera general el IMC de todos los pacientes
for (var i = 0; i < pacientes.length; i++) {

    var tdPeso = pacientes[i].querySelector('.info-peso');
    var tdAltura = pacientes[i].querySelector('.info-altura');
    var tdImc = pacientes[i].querySelector('.info-imc');

    // almacenamos el valor 
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;


    // creamos unas reglas para que no puedan ser valores fuera de rango
    pesoValido = true;
    alturaValido = true;


    if ((peso <= 0) || (peso > 150)) {
        console.log("El peso se encuentra fuera de valor");
        tdImc.textContent = "Peso Incorrecto";
        pesoValido = false;
        pacientes[i].classList.add("paciente-incorrecto");
    }

    if ((altura < 0) || (altura > 3.00)) {
        console.log("La altura se encuentra fuera de valor");
        tdImc.textContent = "Altura Incorrecta";
        alturaValido = false;
        pacientes[i].classList.add("paciente-incorrexto");
    }

    if (pesoValido && alturaValido) {
        // asignamos el IMC para que aparezca en nuestra tabla
        tdImc.textContent = calcularIMC(peso, altura);
    }
}


function calcularIMC(peso, altura) {
    // calculamos el IMC
    var IMC = peso / (altura ** 2);
    return IMC.toFixed(2); // toFixed nos ayuda para controlar el numero de decimales
}