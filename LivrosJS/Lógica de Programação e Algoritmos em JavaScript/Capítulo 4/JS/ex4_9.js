(() => {
   function previsaoChinchilas() {
      let inChinchilas = document.querySelector("#inChinchilas");
      let inAnos = document.querySelector("#inAnos");
      let outPrevisao = document.querySelector("#outPrevisao")

      let chinchilas = Number(inChinchilas.value);
      let anos = Number(inAnos.value);

      if (chinchilas < 2 || isNaN(chinchilas)) {
         alert("Por favor, digite no mínimo 1 par de chinchilas...")
         inChinchilas.focus();
         return
      }
      if (anos == 0 || isNaN(anos)) {
         alert("Por favor, digite o número de anos corretamente...");
         inAnos.focus();
         return;
      }

      let previsao = "";
      let multiplicacao = chinchilas;

      for (let i = 1; i <= anos; i++) {
         if (i == 1) {
            previsao = previsao + i + "º Ano: " + chinchilas + " Chinchilas" + "\n";
         } else {
            multiplicacao = multiplicacao * 3;
            previsao = previsao + i + "º Ano: " + multiplicacao + " Chinchilas" + "\n";
         }
      }

      outPrevisao.textContent = previsao;
   }

   let btMostrar = document.querySelector("#btMostrar");
   btMostrar.addEventListener("click", previsaoChinchilas)
})();