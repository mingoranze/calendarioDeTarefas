const closeButton = document.querySelector('.close');
const tarefaBody = document.querySelector('.tarefa-body');
const modalArea = document.querySelector('.modal-area');
const modalForm = document.querySelector('#form')
const tarefaItem = document.querySelectorAll('.tarefa-item');
const tarefaInput = document.querySelector('#text')
const radios = document.getElementsByName('pessoa');

function close() {
    modalArea.style.display = 'none'
}; 


tarefaItem.forEach((day)=>{
    day.addEventListener('click', ()=>{
        modalArea.style.display = 'flex';
        modalForm.onsubmit = (e)=>{
            e.preventDefault();
            const value = tarefaInput.value;
            day.querySelector('.texto').innerHTML = value;
            for(i=0; i<radios.length; i++) {
                if(radios[i].checked){
                    day.querySelector('.pessoa').innerHTML = radios[i].value;
                } 
            }


            
            tarefaInput.value = '';
            close();
        };

    }); 
});






  
  