document.querySelector("ltrar_pendentes").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => !tarefa.concluida)
    filtrar(tarefasFiltradas)
})

document.querySelector("ltrar_concluidas").addEventListener("click", () =>{
    let tarefasFiltradas = tarefas.filter(tarefa => tarefa.concluida)
    filtrar(tarefasFiltradas)
})