//AULA 4 - 5
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);
    var pacienteTr = constroiTr(paciente);
    
    var tabela = document.querySelector("#tabela-pacientes");
    var mensagem = document.querySelector("#mensagem-cadastro");
    
    if(PacienteValido(paciente))
    {
        tabela.appendChild(pacienteTr);
        form.reset();
    }
    else
    {
        mensagem.textContent = "Valores Informados invalidos";
        mensagem.classList.add("paciente-invalido");
    }

});

//AULA 5
function obtemPacienteFormulario(form)
{
    paciente = 
    {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function constroiTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(constroiTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(constroiTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(constroiTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(constroiTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(constroiTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function constroiTd(texto, classe)
{
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = texto;

    return td;
}

//AULA 6
function PacienteValido(paciente)
{
    if(pesoValido(paciente.peso) && alturaValida(paciente.altura))
    {
        return true;
    }

    return false;
}

function pesoValido(peso)
{
    return (peso > 0 && peso < 1000);
}

function alturaValida(altura)
{
    return (altura > 0 && altura < 4);
}