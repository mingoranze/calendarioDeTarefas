let closeButton = document.querySelector('.close');
let modalArea = document.querySelector('.modal-area');
let tarefaBody = document.querySelector('.tarefa-body');


closeButton.addEventListener('click', (e)=>{
    if(modalArea.style.display = 'flex') {
        modalArea.style.display = 'none'
    }
});

tarefaBody.addEventListener('click', (e)=>{
    modalArea.style.display = "flex";
    let input = document.querySelector('#text').value;
    let item = e.target;
   
    console.log(item)
});

function add() {
   
}