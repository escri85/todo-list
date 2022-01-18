

window.onload = function () {
    addItem();
  };


const addItem = ()=>{
    document.getElementById('boton').addEventListener('click',newTask)
}




 const newTask = ()=>{
    const divContainerTask = document.getElementById('container_task')
    const input = document.getElementById('input').value
    const div = document.createElement('div')
    const buttonRemoveTask = document.createElement('button')
    const li = document.createElement('li')
    divContainerTask.appendChild(div)
    div.appendChild(li)
    div.appendChild(buttonRemoveTask)

    buttonRemoveTask.classList.add('buttonRemoveTask')

    div.classList.add('container__task__item')
    buttonRemoveTask.id='buttonRemove'

    buttonRemoveTask.textContent='X'
    li.textContent=input

    const remove = ()=>{
        div.classList.add('hide')
    }
    buttonRemoveTask.addEventListener('click',remove)
}

