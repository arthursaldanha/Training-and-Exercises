(() => {
   function repeteFruta() {
      let inFruta = document.querySelector("#inFruta");
      let inNumero = document.querySelector("#inNumero");
      let outFrutas = document.querySelector("#outFrutas");

      let fruta = String(inFruta.value);
      let numero = Number(inNumero.value);
      
      if (fruta == "") {
         alert("Por favor, infome a fruta corretamente...");
         inFruta.focus();
         return
      }
      if (numero == 0 || isNaN(numero)) {
         alert("Por favor, informe os dados corretamente...");
         inNumero.focus();
         return;
      }

      let resposta = "";

      for (let i = numero; i >= 1; i--) {
         if (i > 1) {
            resposta = resposta + fruta + " * ";
         } else {
            resposta = resposta + fruta;
         }
      }

      outFrutas.textContent = resposta;
   }

   let btRepetir = document.querySelector("#btRepetir");
   btRepetir.addEventListener("click", repeteFruta);
})();