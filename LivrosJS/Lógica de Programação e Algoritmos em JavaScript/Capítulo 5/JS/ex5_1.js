(() => {
   const inPacientes = document.querySelector("#inPaciente");
   const outLista = document.querySelector("#outLista");
   const outAtendimento = document.querySelector("#outAtendimento"); 

   let pacientes = [];

   function adicionarPaciente() {
      let nome = String(inPacientes.value);

      if (nome == "") {
         alert("Por favor, digite o nome do paciente corretamente...");
         inPacientes.focus();
         return;         
      }

      // adiciona o nome no final do vetor
      pacientes.push(nome);

      // String para concatenar os pacientes
      let lista = "";
      
      // percorre os elementos do vetor
      for (let index = 0; index < pacientes.length; index++) {
         lista += (index + 1) + ". " + pacientes[index] + "\n"
      }
      outLista.textContent = lista;

      // Limpa a campo e posiciona o cursor
      inPaciente.value = ""
      inPaciente.focus();
   }

   function urgenciaPaciente() {
      let nome = String(inPacientes.value);

      if (nome == "") {
         alert("Por favor, digite o nome do paciente corretamente...");
         inPacientes.focus();
         return;         
      }

      // adiciona o nome no início do vetor
      pacientes.unshift(nome);

      let lista = "";
      
      for (let index = 0; index < pacientes.length; index++) {
         lista += (index + 1) + ". " + pacientes[index] + "\n"
      }
      outLista.textContent = lista;

      inPaciente.value = ""
      inPaciente.focus();
   }

   function atenderPaciente() {
      // Verifica se o vetor está vazio
      if (pacientes.length == 0) {
         alert("Não há pacientes na lista de espera");
         inPaciente.focus();
         return;
      }

      // retira o paciente do início
      let atender = pacientes.shift();
      // atribui essa retirada
      outAtendimento.textContent = atender;

      let lista = "";
      
      for (index = 0; index < pacientes.length; index++) {
         lista += (index + 1) + ". " + pacientes[index] + "\n"
      }
      outLista.textContent = lista;
   }

   let btAdicionar = document.querySelector("#btAdicionar");
   btAdicionar.addEventListener("click", adicionarPaciente);

   let btUrgencia = document.querySelector("#btUrgencia");
   btUrgencia.addEventListener("click", urgenciaPaciente);

   let btAtender = document.querySelector("#btAtender");
   btAtender.addEventListener("click", atenderPaciente);
})();