let inputTask = document.querySelector('#input-field');
let addButton = document.querySelector('#input-button');
let list = document.querySelector('ol');

let taskList = [];


addButton.addEventListener('click', () => {
    if(inputTask.value !== ''){
        let taskText = inputTask.value;
        taskList.push(taskText);
        inputTask.value = '';
        console.log(taskText);
        const divTasks = document.createElement("div");
        divTasks.classList.add('tasks');
        const listItem = document.createElement("li");
        listItem.classList.add('task')
        const node = document.createTextNode(`${taskText}`);
        listItem.appendChild(node);
        const deleteButton = document.createElement("button");
        deleteButton.classList.add('delete-task')
        const deleteText = document.createTextNode('Delete');
        deleteButton.appendChild(deleteText)
        deleteButton.addEventListener('click', () => {
            // Remove from DOM
            divTasks.remove();
            // Remove from array
            const index = taskList.indexOf(taskText);
            if (index > -1) {
                taskList.splice(index, 1);
            }
        });

        list.appendChild(divTasks)
        divTasks.appendChild(listItem)
        divTasks.appendChild(deleteButton)
    } else{
        alert('Please enter a task')
    }
})

let deleteButton = document.querySelector('.delete-task');

deleteButton.addEventListener('click', (e) => {

})
