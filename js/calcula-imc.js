//AULA 1
// var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);

// titulo.textContent = "Aparecida Nutricionista";

//AULA 2
// var paciente = document.querySelector("#primeiro-paciente")
// var peso = paciente.querySelector(".info-peso").textContent;
// var altura = paciente.querySelector(".info-altura").textContent;
// var textoImc = paciente.querySelector(".info-imc");

// var pesoValido = (peso > 0 && peso < 1000);
// var alturaValida = (altura > 0 && altura < 4)

// if(pesoValido && alturaValida)
// {
//     var imc = (peso / Math.pow(altura, 2));
//     textoImc.textContent = imc;
// }
// else
// {
//     textoImc.textContent = "Altura ou peso inválidos";
// }

//AULA 3
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++)
{
    var paciente = pacientes[i];
    
     var peso = paciente.querySelector(".info-peso").textContent;
     var altura = paciente.querySelector(".info-altura").textContent;
     var textoimc = paciente.querySelector(".info-imc");
    
     if(pesoValido(peso) && alturaValida(altura))
     {
         textoimc.textContent = calculaImc(peso, altura)
     }
     else
     {
         textoimc.textContent = "Altura ou peso inválidos";
         paciente.classList.add("paciente-invalido")
     }

}

//AULA 5
function calculaImc(peso, altura)
{
    return (peso / Math.pow(altura, 2)).toFixed(2);
}
