(() => {
   function calcularPesoIdeal() {
      var inNome = document.querySelector("#inNome");
      var rbMasculino = document.querySelector("#rbMasculino");
      var rbFeminino = document.querySelector("#rbFeminino");
      var inAltura = document.querySelector("#inAltura");
      var outResposta = document.querySelector("#outResposta");

      var nome = String(inNome.value);
      var masculino = rbMasculino.checked;
      var feminino = rbFeminino.checked;
      var altura = Number(inAltura.value);

      if (nome == "" || (masculino == false && feminino == false)) {
         alert("Por favor, informe o nome e selecione o sexo...");
         inNome.focus();
         return;
      }

      if (altura == 0 || isNaN(altura)) {
         alert("Por favor, informe a altura corretamente...");
         inAltura.focus();
         return;
      }

      // Se masculino (significa se masculino == true)
      if (masculino) {
         var peso = 22 * Math.pow(altura, 2);
      } else {
         peso = 21 * Math.pow(altura, 2)
      }

      outResposta.textContent = nome + ", seu peso ideal é " + peso.toFixed(3) + "Kg";
}

   function limparCampos() {
      document.querySelector("#inNome").value = "";
      document.querySelector("#rbMasculino").checked = false; 
      document.querySelector("#rbFeminino").checked = false;
      document.querySelector("#inAltura").value = "";
      document.querySelector("#outResposta").textContent = "";

      document.querySelector("#inNome").focus(); 
   }

   var btResultado = document.querySelector("#btCalcular");
   btResultado.addEventListener("click", calcularPesoIdeal);

   var btLimpar = document.querySelector("#btLimpar");
   btLimpar.addEventListener("click", limparCampos);
})();
