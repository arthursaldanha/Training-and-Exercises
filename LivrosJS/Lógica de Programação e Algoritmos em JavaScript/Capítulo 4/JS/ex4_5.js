(() => {
   let numContas = 0;
   let valTotal = 0;

   let resposta = "";

   function registrarConta() {
      let inDescricao = document.querySelector("#inDescricao");
      let inValor = document.querySelector("#inValor");
      let outListaContas = document.querySelector("#outListaContas");
      let outTotal = document.querySelector("#outTotal");

      let descricao = inDescricao.value;
      let valor = Number(inValor.value);

      if (descricao == "" || valor == 0 || isNaN(valor)) {
         alert("Por favor, informe os dados corretamente...");
         inDescricao.focus();
         return;
      }

      numContas++;
      valTotal = valTotal + valor;

      resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

      outListaContas.textContent = resposta + "--------------------------------";
      outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

      inDescricao.value = "";
      inValor.value = "";
      inDescricao.focus();
   }

   function limparCampos() {
      numContas = 0;
      valTotal = 0;
      resposta = "";

      outListaContas.textContent = "";
      outTotal.textContent = "";
      
      inDescricao.value = "";
      inValor.value = "";
      inDescricao.focus();
   }

   let btRegistrar = document.querySelector("#btRegistrar");
   btRegistrar.addEventListener("click", registrarConta);

   let btLimpar = document.querySelector("#btLimpar");
   btLimpar.addEventListener("click", limparCampos);
})();