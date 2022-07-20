window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const listaDeTarefas = document.querySelector("#tasks");

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const tarefa = input.value;

        if (!tarefa) {
            alert("Preencha o campo com a sua nova tarefa");
            return;
        }

        const elementoTarefa = document.createElement("div");
        elementoTarefa.classList.add("task");

        const elementoTarefaConteudo = document.createElement("div");
        elementoTarefaConteudo.classList.add("content");
        

        elementoTarefa.appendChild(elementoTarefaConteudo);

        const elementoTarefaInput = document.createElement('input');
        elementoTarefaInput.classList.add("text");
        elementoTarefaInput.type = "text";
        elementoTarefaInput.value = tarefa;
        elementoTarefaInput.setAttribute("readonly", "readonly");


        elementoTarefaConteudo.appendChild(elementoTarefaInput);

        const elementoTarefaAcao = document.createElement("div");
        elementoTarefaAcao.classList.add("actions");

        const elementoTarefaEdit = document.createElement("button");
        elementoTarefaEdit.classList.add("edit");
        elementoTarefaEdit.innerHTML = "Editar";

        const elementoTarefaDelete = document.createElement("button");
        elementoTarefaDelete.classList.add("delete");
        elementoTarefaDelete.innerHTML = "Apagar";

        elementoTarefaAcao.appendChild(elementoTarefaEdit);
        elementoTarefaAcao.appendChild(elementoTarefaDelete)

        elementoTarefa.appendChild(elementoTarefaAcao);



        listaDeTarefas.appendChild(elementoTarefa);

        input.value = "";

        elementoTarefaEdit.addEventListener('click', () => {
           if (elementoTarefaEdit.innerText.toLowerCase() === "editar") {
            elementoTarefaInput.removeAttribute("readonly");
            elementoTarefaInput.focus();
            elementoTarefaEdit.innerText = "Salvar";
        } else {
            elementoTarefaInput.setAttribute("readonly", "readonly");
            elementoTarefaEdit.innerText = "Editar"
        }

        });

        elementoTarefaDelete.addEventListener('click', () => {
            listaDeTarefas.removeChild(elementoTarefa);

        });
    })
})