function mostrarOla() {
   var nome = document.querySelector("#nome").value;
   document.querySelector("#resposta").textContent = "Olá " + nome;
} 

var mostrar = document.querySelector("#mostrar");
mostrar.addEventListener("click", mostrarOla);