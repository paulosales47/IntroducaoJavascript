var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    if(event.target.tagName == "TD")
    {
        var itemClicado = event.target.parentNode
        itemClicado.classList.add("fadeOut")
        
        setTimeout(function(){
            itemClicado.remove();
        }, 500);
    }
});
