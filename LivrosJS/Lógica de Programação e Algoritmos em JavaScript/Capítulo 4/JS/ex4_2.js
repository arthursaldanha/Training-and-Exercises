(() => {
   function numerosDecrescentes() {
      var inNumero = document.querySelector("#inNumero");
      var outResultado = document.querySelector("#outResultado");

      var numero = Number(inNumero.value);

      if (numero == 0 || isNaN(numero)) {
         alert("Por favor, informe o número corretamente...");
         inNumero.focus();
         return;
      }

      var resposta = "Entre " + numero + " e 1: ";

      for (let i = numero; i > 0; i--) {
         if (i == 1) {
            resposta = resposta + i + ".";
         } else {
            resposta = resposta + i + ", ";
         }
      }

      outResultado.textContent = resposta;
   }

   var btResultado = document.querySelector("#btResultado");
   btResultado.addEventListener("click", numerosDecrescentes);
})();