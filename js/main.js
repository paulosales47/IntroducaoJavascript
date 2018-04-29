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
     var pesoValido = (peso > 0 && peso < 1000);
     var alturaValida = (altura > 0 && altura < 4)

     if(pesoValido && alturaValida)
     {
         var imc = (peso / Math.pow(altura, 2));
         textoimc.textContent = imc.toFixed(2);
     }
     else
     {
         textoimc.textContent = "Altura ou peso inválidos";
         paciente.classList.add("paciente-invalido")
     }

}

//AULA 4
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    var imc = (peso / Math.pow(altura, 2));

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});

