(() => {
   function calcularRaiz() {
      var inNumero = document.querySelector("#inNumero");
      var outResposta = document.querySelector("#outResposta");

      var numero = Number(inNumero.value);

      if (numero == 0 || isNaN(numero)) {
         alert("Por favor, informe um número inteiro positivo...");
         inNumero.focus();
         return;
      }

      var raiz = Math.sqrt(numero);

      if (raiz % 1 == 0) {
         outResposta.textContent = "Raiz: " + raiz;
      } else {
         outResposta.textContent = "Não há raiz exata para o número " + numero;
      }
   }

   var btExibir = document.querySelector("#btExibir");
   btExibir.addEventListener("click", calcularRaiz);
})();