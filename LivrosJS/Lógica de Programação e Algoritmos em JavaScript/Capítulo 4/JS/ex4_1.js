(() => {
   function mostrarTabuada() {
      inNumero = document.querySelector("#inNumero");
      outTabuada = document.querySelector("#outTabuada");
      
      numero = Number(inNumero.value);

      if (numero == 0  || isNaN(numero)) {
         alert("Por favor, informe o número corretamente...");
         inNumero.focus();
         return;
      }

      var resposta = "";

      for (let i = 1; i <= 10; i++) {
      resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";         
      }

      outTabuada.textContent = resposta;
   }

   var btMostrar = document.querySelector("#btMostrar");
   btMostrar.addEventListener("click", mostrarTabuada);
})();