function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let selecionado="false"
function selecionado() {
  document.querySelector(".card-item-plano").style.backgroundColor="#669D31";
<<<<<<< HEAD
  document.querySelector(".fw-normal").style.color="#FEFADC";
}




=======
  document.querySelector(".fw-normal").style.color="#fefadc";
}
>>>>>>> 61454270b1e4f60c370b3c2fdc909f2b2800ea7c
