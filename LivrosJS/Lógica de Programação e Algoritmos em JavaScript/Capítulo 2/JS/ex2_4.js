function calcularPreco(){
   var inPreco = document.querySelector("#inPreco");
   var inPeso = document.querySelector("#inPeso");
   var outResultado = document.querySelector("#outResultado");

   var preco = Number(inPreco.value);
   var peso = Number(inPeso.value);

   var totalAPagar = (preco * peso) / 1000;

   outResultado.textContent = "Valor a pagar R$: " + totalAPagar.toFixed(2);
}

var btCalcularPreco = document.querySelector("#btCalcular");
btCalcularPreco.addEventListener("click", calcularPreco);