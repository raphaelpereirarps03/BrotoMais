let modal = document.querySelector("#principal")
let compra = document.querySelector("#form")
let fundo = document.querySelector("#fundo_escuro")
        function abrir_modal(){
            modal.style.visibility="visible"
            compra.style.visibility="hidden"
            fundo.style.visibility="visible"
            fundo.style.transition= "opacity 0.5s";
            fundo.style.opacity=0.9;
        }
        function fechar_modal(){
            modal.style.visibility="hidden"
            compra.style.visibility="visible"
            fundo.style.visibility="hidden"
            fundo.style.opacity = 0;
        }
        function abrir_modal2(){
            modal.style.visibility="visible"
            fundo.style.visibility="visible"
            fundo.style.transition= "opacity 0.5s";
            fundo.style.opacity=0.9;
        }
        function fechar_modal2(){
            modal.style.visibility="hidden"
            fundo.style.visibility="hidden"
            fundo.style.opacity = 0;
        }
        