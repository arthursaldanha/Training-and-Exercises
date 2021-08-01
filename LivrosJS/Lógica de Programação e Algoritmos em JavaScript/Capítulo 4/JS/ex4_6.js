(() => {
   function verificarPrimo() {
      let inNumero = document.querySelector("#inNumero");
      let outResposta = document.querySelector("#outResposta");
      
      let numero = Number(inNumero.value);

      if (numero == 0 || isNaN(numero)) {
         alert("Por favor, informe o número corretamente...");
         inNumero.focus();
         return;
      }

      let numDivisores = 0;

      for (let i = 1; i <= numero; i++) {
         if (numero % i == 0) {
            numDivisores++;
         }
      }

      if (numDivisores > 2) {
         outResposta.textContent = numero + " não é primo!"         
      } else {
         outResposta.textContent = numero + " é primo!"    
      }
   }

   let btVerificar = document.querySelector("#btVerificar");
   btVerificar.addEventListener("click", verificarPrimo);
})();