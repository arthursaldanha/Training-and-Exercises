function converterDuracao() {
   var inTitulo = document.querySelector("#inTitulo");
   var inDuracao = document.querySelector("#inDuracao");
   var outTitulo = document.querySelector("#outTitulo");
   var outResposta = document.querySelector("#outResposta");

   var titulo = inTitulo.value;
   var duracao = Number(inDuracao.value);

   var horas = Math.floor(duracao / 60);
   var minutos = duracao % 60

   outTitulo.textContent = titulo;
   outResposta.textContent = horas + " hora(s) e " + minutos + " minutos";
}

var btConverter = document.querySelector("#btConverter");
btConverter.addEventListener("click", converterDuracao)