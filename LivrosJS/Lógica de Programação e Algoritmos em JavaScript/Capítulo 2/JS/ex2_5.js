function mostrarPromocao() {
   var inMedicamento = document.querySelector("#inMedicamento");
   var inPreco = document.querySelector("#inPreco");
   var outRemedio = document.querySelector("#outRemedio");
   var outPromocao = document.querySelector("#outPromocao");

   var medicamento = inMedicamento.value;
   var preco = Number(inPreco.value)

   var promocao = 2 * (Math.floor(preco));

   outRemedio.textContent = "Promoção de " + medicamento;
   outPromocao.textContent = "Leve 2 por apenas R$: " + promocao;
}

 var btMostrarPromocao = document.querySelector("#btMostrarPromocao");
 btMostrarPromocao.addEventListener("click", mostrarPromocao)