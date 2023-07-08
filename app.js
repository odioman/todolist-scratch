const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const todoList = document.querySelector('.todoList');

function createTodo(e) {
    e.preventDefault();
    const item = document.createElement('li');
    item.classList.add('todoItem');

    const task = document.createElement('input');
    task.setAttribute('readonly', true);
    task.value = input.value;
    task.classList.add('todo');
    item.append(task);

    const completedBtn = document.createElement('input');
    completedBtn.type = 'checkbox';
    completedBtn.classList.add('completedBtn');
    item.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.type = 'button';
    item.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.classList.add('editBtn');
    editBtn.type = 'button';
    item.appendChild(editBtn);

    todoList.appendChild(item);
    input.value = '';
}

function deleteTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'deleteBtn') {
        const todo = item.parentElement;
        todo.remove()
    }
}

function completeTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'completedBtn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function editTodo(e) {
    const item = e.target;
    if (item.classList[0] === 'editBtn') {
        const todo = item.parentElement;
        item.classList.toggle('editMode');
        todo.firstElementChild.toggleAttribute('readonly');
    }
}

addBtn.addEventListener('click', createTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', completeTodo);
todoList.addEventListener('click', editTodo);









