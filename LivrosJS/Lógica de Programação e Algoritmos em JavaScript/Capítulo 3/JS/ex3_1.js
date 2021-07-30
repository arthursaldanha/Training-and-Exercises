function calcularMedia() {
   var inNome = document.querySelector("#inNome");
   var inNota1 = document.querySelector("#inNota1");
   var inNota2 = document.querySelector("#inNota2");
   var outMedia = document.querySelector("#outMedia");
   var outSituacao = document.querySelector("#outSituacao");

   var nome = String(inNome.value);
   var nota1 = Number(inNota1.value);
   var nota2 = Number(inNota2.value);

   var media = (nota1 + nota2) / 2;
   
   outMedia.textContent = "Média das notas: " + media.toFixed(2);

   if (media >= 7) {
      outSituacao.textContent = "Parabéns " + nome + ", você foi aprovado(a)!";
      outSituacao.style.color = "blue"
   } else {
      outSituacao.textContent = "Ops " + nome + ", você  foi reprovado!";
      outSituacao.style.color = "red"
   }
}

var btResultado = document.querySelector("#btResultado");
btResultado.addEventListener("click", calcularMedia)