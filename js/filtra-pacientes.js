var campoFiltro = document.querySelector("#filtra-tabela");

campoFiltro.addEventListener("input", function(){
    
    var value = this.value;
    var regExp = new RegExp(this.value, "i")

    var pacientes = document.querySelectorAll(".paciente");

    if(value.length > 0){
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector(".info-nome").textContent;
            
            if(regExp.test(nome))
            {
                paciente.classList.remove("oculta");
            }
            else
            {
                paciente.classList.add("oculta");
            }

        });
    }
    else
    {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("oculta");
        });
    }
});