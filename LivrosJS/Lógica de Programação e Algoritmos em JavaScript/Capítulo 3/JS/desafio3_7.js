(() => {
   function verificarParOuImpar() {
      var inNumero = document.querySelector("#inNumero");
      var outResposta = document.querySelector("#outResposta");

      var numero = Number(inNumero.value);

      if (numero == 0 || isNaN(numero)) {
         alert("Por favor, informe um número...")
         inNumero.focus();
         return;
      }
      
      if (numero % 2 == 0) {
         outResposta.textContent = "Resposta: " + numero + " é Par"
      } else {
         outResposta.textContent = "Resposta: " + numero + " é Ímpar"
      }
   }

   var btVerificar = document.querySelector("#btVerificar");
   btVerificar.addEventListener("click", verificarParOuImpar)
})();