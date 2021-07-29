function mostrarPromocao() {
   var inVeiculo = document.querySelector("#inVeiculo");
   var inPreco = document.querySelector("#inPreco");
   var outVeiculo = document.querySelector("#outVeiculo");
   var outEntrada = document.querySelector("#outEntrada");
   var outParcela = document.querySelector("#outParcela");

   var veiculo = inVeiculo.value;
   var preco = Number(inPreco.value);

   var entrada = preco * 0.50;
   var parcela = entrada / 12;

   outVeiculo.textContent = "Promoção: " + veiculo;
   outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
   outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

var btVerPromocao = document.querySelector("#btVerPromocao");
btVerPromocao.addEventListener("click", mostrarPromocao)