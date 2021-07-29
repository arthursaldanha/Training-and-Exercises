function valorAPagar() {
   var inValor = document.querySelector("#inValor");
   var inTempo = document.querySelector("#inTempo")
   var outResposta = document.querySelector("#outResposta");

   var valor = Number(inValor.value);
   var tempo = Number(inTempo.value);

   var tempoConvertido = Math.ceil(tempo / 15);
   var totalAPagar = tempoConvertido * valor;

   outResposta.textContent = "Valor a Pagar R$:" + totalAPagar.toFixed(2);
}

var valorTotal = document.querySelector("#total");
valorTotal.addEventListener("click", valorAPagar);