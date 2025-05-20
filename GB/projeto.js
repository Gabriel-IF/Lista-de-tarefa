const pastas = [];

function criar() {
  const nomePasta = document.getElementById("pasta").value.trim();
  if (!nomePasta) {
    alert("Digite um nome válido para a pasta!");
    return;
  }

  const novaPasta = {
    nome: nomePasta,
    tarefas: []
  };

  pastas.push(novaPasta);
  renderizarPastas();
  document.getElementById("pasta").value = "";
}

function adicionarTarefa(index) {
  const inputTarefa = document.getElementById(`tarefa-${index}`);
  const inputData = document.getElementById(`data-${index}`);
  const tarefaTexto = inputTarefa.value.trim();
  const data = inputData.value;

  if (!tarefaTexto || !data) {
    alert("Preencha todos os campos da tarefa!");
    return;
  }

  const novaTarefa = {
    descricao: tarefaTexto,
    dataHora: new Date(data).toLocaleString()
  };

  pastas[index].tarefas.push(novaTarefa);
  renderizarPastas();
}

function renderizarPastas() {
  const container = document.getElementById("pastasContainer");
  container.innerHTML = ""; // limpa tudo antes de redesenhar

  pastas.forEach((pasta, index) => {
    const div = document.createElement("div");
    div.className = "pasta";

    div.innerHTML = `
      <h3>${pasta.nome}</h3>
      <div class="row">
        <input type="text" id="tarefa-${index}" placeholder="Nova tarefa" />
        <input type="datetime-local" id="data-${index}" />
        <button onclick="adicionarTarefa(${index})">Adicionar</button>
      </div>
      <ul>
        ${pasta.tarefas.map(tarefa => `<li>${tarefa.descricao} - ${tarefa.dataHora}</li>`).join("")}
      </ul>
    `;

    container.appendChild(div);
  });
}
    