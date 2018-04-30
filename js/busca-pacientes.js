var botaoAdicionar = document.querySelector("#busca-pacientes")
var tabela = document.querySelector("#tabela-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    
    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200)
        {
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(function(paciente){
                var tr = constroiTr(paciente);
                tabela.appendChild(tr);
            });
        }
        else
        {
            alert("Erro ao buscar lista de pacientes");
        }
    });

    xhr.send();
});