(() => {
   function mostrarHora() {
      var inHoraBrasil = document.querySelector("#inHoraBrasil");
      var outHoraFranca = document.querySelector("#outHoraFranca");

      var horaBrasil = Number(inHoraBrasil.value);

      // Caso o usuário não preencha ou NaN
      if (horaBrasil == 0 || isNaN(horaBrasil)) {
         alert("Por favor, informe a hora no Brasil corretamente...");
         inHoraBrasil.focus();
         return;
      }

      var horaFranca = horaBrasil + 5;

      if (horaFranca > 24) {
         horaFranca = horaFranca - 24;
      }

      outHoraFranca.textContent = "Hora na França: " + horaFranca.toFixed(2);
   }
   
   var btExibir = document.querySelector("#btExibir");
   btExibir.addEventListener("click", mostrarHora);
})();