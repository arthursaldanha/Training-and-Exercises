(() => {
   function preencherEspacos() {
      let inNumero = document.querySelector("#inNumero");
      let outEspacos = document.querySelector("#outEspacos");

      let numero = Number(inNumero.value);

      if (numero == 0 || isNaN(numero))  {
         alert("Por favor, informe o número corretamente...");
         inNumero.focus();
         return;
      }

      let resposta = "";

      for (let i = 1; i <= numero; i++) {
         if (i % 2 == 1) {
            resposta = resposta + "*";
         } else {
            resposta = resposta + "-";
         }     
      }

      outEspacos.textContent = resposta;
   }

   let btPreencher = document.querySelector("#btPreencher");
   btPreencher.addEventListener("click", preencherEspacos)
})();