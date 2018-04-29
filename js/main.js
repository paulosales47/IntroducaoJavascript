//AULA 1
// var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);

// titulo.textContent = "Aparecida Nutricionista";

//AULA 2
var paciente = document.querySelector("#primeiro-paciente")
var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var textoImc = paciente.querySelector(".info-imc");

var pesoValido = (peso > 0 && peso < 1000);
var alturaValida = (altura > 0 && altura < 4)

if(pesoValido && alturaValida)
{
    var imc = (peso / Math.pow(altura, 2));
    textoImc.textContent = imc;
}
else
{
    textoImc.textContent = "Altura ou peso inválidos";
}