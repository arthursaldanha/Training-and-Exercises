(() => {
   function calcularNotas() {
      var inSaque = document.querySelector("#inSaque");
      var outNotas100 = document.querySelector("#outNotas100");
      var outNotas50 = document.querySelector("#outNotas50");
      var outNotas10 = document.querySelector("#outNotas10");

      outNotas100.textContent = "";
      outNotas50.textContent = "";
      outNotas10.textContent = "";
      
      var saque = Number(inSaque.value);

      if (saque == 0 || isNaN(saque)) {
         alert("Por favor, informe o valor do saque corretamente...");
         inSaque.focus();
         return;
      }

      if (saque % 10 != 0) {
         alert("Por favor, informe um valor válido para as notas disponíveis (10, 50, 100)");
         inSaque.focus();
         return;
      }

      var notas100 = Math.floor(saque / 100);
      var resto = saque % 100;
      var notas50 = Math.floor(resto / 50);
      resto = resto % 50;
      var notas10 = Math.floor(resto / 10);

      if (notas100 > 0) {
         outNotas100.textContent = "Notas de R$ 100,00: " + notas100;
      }
      if (notas50 > 0) {
         outNotas50.textContent = "Notas de R$ 50,00: " + notas50;
      }
      if (notas10 > 0) {
         outNotas10.textContent = "Notas de R$ 10,00: " + notas10;
      }
   }

   var btExibir = document.querySelector("#btExibir");
   btExibir.addEventListener("click", calcularNotas)
})();