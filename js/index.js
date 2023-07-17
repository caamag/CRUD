
const addTarefaForm = document.querySelector('.addTarefaForm'); 
const inputAddtarefa = document.querySelector('#add-tarefa');
const listaGeral = document.querySelector('.lista'); 
const pesquisa = document.querySelector('.pesquisa');
const formEdit = document.querySelector('.form-edit'); 
const editForm = document.querySelector('.form-edit'); 
const editInput = document.querySelector('#editar-tarefa');

let oldInputValue; 

function addTarefa (tarefa) {

    const tarefaDiv = document.createElement("div"); 
    tarefaDiv.classList.add("tarefa"); 

    const title = document.createElement("p");
    title.classList.add('tarefa-texto'); 
    title.innerText = tarefa;
    
    tarefaDiv.appendChild(title); 

    const feitoBtn = document.createElement("button"); 
    feitoBtn.classList.add("feito"); 
    feitoBtn.innerHTML = '&#10003';
    tarefaDiv.appendChild(feitoBtn); 

    const editarBtn = document.createElement("button"); 
    editarBtn.classList.add("editar"); 
    editarBtn.innerHTML = '&#9998';
    tarefaDiv.appendChild(editarBtn); 

    const excluirBtn = document.createElement("button"); 
    excluirBtn.classList.add("excluir"); 
    excluirBtn.innerHTML = '&#10006';
    tarefaDiv.appendChild(excluirBtn); 

    listaGeral.appendChild(tarefaDiv); 

    inputAddtarefa.value = ''; 
    
}



addTarefaForm.addEventListener('submit', (e) => {

    e.preventDefault(); 

    const novaTarefa = inputAddtarefa.value; 

    if (!novaTarefa) {
        alert('Não pode existir tarefas vazias!');  
    } else {
        addTarefa(novaTarefa); 
    }

})


const tarefaTexto = document.querySelector('.tarefa-texto');  

document.addEventListener('click', (e) => {

    const elemento = e.target; 
    const paiElemento = elemento.closest('div');
    let titleTarefa; 

    if (paiElemento && paiElemento.querySelector('p')) {
        titleTarefa = paiElemento.querySelector('p').innerText; 
    }

    if (elemento.classList.contains('feito')) {
        paiElemento.classList.toggle('tarefa-feita');
    }

    if (elemento.classList.contains('excluir')) {
        paiElemento.remove(); 
    }

    if (elemento.classList.contains('editar')) {
        addTarefaForm.style.display = 'none'; 
        pesquisa.style.display = 'none'; 
        listaGeral.style.display = 'none';
        formEdit.style.display = 'block'; 

        editInput.value = titleTarefa; 
        oldInputValue.value = titleTarefa;

    }

})


const btnCancel = document.querySelector('#cancel'); 

btnCancel.addEventListener('click', (e) => {

    e.preventDefault(); 

    addTarefaForm.style.display = 'block'; 
    pesquisa.style.display = 'block'; 
    pesquisa.style.display = 'flex'; 
    listaGeral.style.display = 'block';
    formEdit.style.display = 'none'; 
    

})


function updateTarefa () {



}



editForm.addEventListener('submit', (e) => {

    e.preventDefault(); 

    const editInputValue = editInput.value; 

    if (editInput) {

    }  


})