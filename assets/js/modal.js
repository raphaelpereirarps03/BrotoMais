let modal = document.querySelector("#principal")
let compra = document.querySelector("#form")
let fundo = document.querySelector("#fundo_escuro")
let blur = document.querySelector("#blur")
        function abrir_modal(){
            modal.style.visibility="visible"
            compra.style.visibility="hidden"
            fundo.style.visibility="visible"
            fundo.style.transition= "opacity 0.5s";
            document.getElementsByTagName("main")[0].classList.add("blur")
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            fundo.style.opacity=0.95;
        }
        function fechar_modal(){
            modal.style.visibility="hidden"
            compra.style.visibility="visible"
            fundo.style.visibility="hidden"
            fundo.style.transition= "opacity 0.5s";
            document.getElementsByTagName("main")[0].classList.remove("blur")
            document.getElementsByTagName("body")[0].style.overflow = "visible";
            fundo.style.opacity = 0;
        }
        function abrir_modal2(){
            modal.style.visibility="visible"
            fundo.style.visibility="visible"
            fundo.style.transition= "opacity 0.5s";
            document.getElementsByTagName("main")[0].classList.add("blur")
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
            fundo.style.opacity=0.95;
            document.getElementsByTagName("nav")[0].style.display = "none";
        }
        function fechar_modal2(){
            modal.style.visibility="hidden"
            fundo.style.visibility="hidden"
            fundo.style.transition= "opacity 0.5s";
            document.getElementsByTagName("main")[0].classList.remove("blur")
            document.getElementsByTagName("body")[0].style.overflow = "visible";
            fundo.style.opacity = 0;
            document.getElementsByTagName("nav")[0].style.display = "block";
        }
        