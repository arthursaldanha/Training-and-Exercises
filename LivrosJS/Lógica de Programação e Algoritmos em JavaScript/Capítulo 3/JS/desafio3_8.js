(() => {
   function verificarVelocidade() {
      var inVelocidadePermitida = document.querySelector("#inVelocidadePermitida");
      var inVelocidadeCondutor = document.querySelector("#inVelocidadeCondutor");
      var outResposta = document.querySelector("#outResposta");

      var velPermitida = Number(inVelocidadePermitida.value);
      var velCondutor = Number(inVelocidadeCondutor.value);

      if (velPermitida == 0 || isNaN(velPermitida)) {
         alert("Por favor, informe a velocidade permitida corretamente...");
         inVelocidadePermitida.focus();
         return;
      }

      if (velCondutor == 0 || isNaN(velCondutor)) {
         alert("Por favor, informe a velocidade do condutor corretamente...");
         inVelocidadeCondutor.focus();
         return;
      }

      var velLimite = velPermitida * 1.20;

      if (velCondutor <= velPermitida) {
         outResposta.textContent = "Situação: Sem Multa";
      } else if (velCondutor <= velLimite) {
         outResposta.textContent = "Situação: Multa Leve";
      } else {
         outResposta.textContent = "Situação: Multa Grave";
      }
   }

   var btVerificar = document.querySelector("#btVerificar");
   btVerificar.addEventListener("click", verificarVelocidade);
})();