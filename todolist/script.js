function AdicionarTarefa(){
    let tarefa = document.querySelector("input").value;

    if(tarefa !== ""){
        let li = document.createElement("li")
        li.innerHTML = tarefa + '<span onclick="RemoverTarefa(this.parentNode)">X</span>';

        console.log(li);

        document.querySelector("ul").appendChild(li);

        document.querySelector("input").value = "";
    }
}

function RemoverTarefa(li){
    if(li){
        li.remove();
    }
}