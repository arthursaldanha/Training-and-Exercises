function promocaoSupermercado(){
   var inProduto = document.querySelector("#inProduto");
   var inPreco = document.querySelector("#inPreco");
   var outProduto = document.querySelector("#outProduto");
   var outPreco = document.querySelector("#outPreco");

   var produto = String(inProduto.value);
   var preco = Number(inPreco.value);
   
   var tercProduto = (preco * 0.50);
   var promocao = ((preco * 2) + tercProduto).toFixed(2);
   
   outProduto.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao;
   outPreco.textContent = "O 3º produto custa apenas R$: " + tercProduto.toFixed(2);
}

var btVerPromocao = document.querySelector("#btVerPromocao");
btVerPromocao.addEventListener("click", promocaoSupermercado);