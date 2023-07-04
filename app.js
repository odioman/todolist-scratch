const input = document.querySelector('.input')
const ul = document.querySelector('.todoList')




//create a new li to append to todoList
function newElement() {
    const li = document.createElement('li');
    const inputValue = input.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue === '') {
        return
    } else {
        ul.appendChild(li)
        input.value= '';
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    deleteBtn.className = 'delete';
    li.appendChild(deleteBtn);
    const editBtn = document.createElement("span");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editBtn.className = 'edit';
    li.appendChild(editBtn);


    //add a check mark when clicking on checkbox, styling changes with strikethrough and background color change;
    checkbox.addEventListener('click', function() {
        if (this.checked) {
           li.style.textDecoration = 'line-through';
           li.style.background = '#888';
           li.style.color = '#fff';
        } else {
            li.style = 'auto';
        }
    });

    deleteBtn.addEventListener('click', function(){
        const div = this.parentElement;
        div.style.display = 'none';
    })

    editBtn.addEventListener('click', editItem)
}

function editItem(event) {
    let item = event.target.innerHTML;
    let li = document.querySelector('li')
    let itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.value = li.textContent;
    li.style.display = 'hidden'
    itemInput.classList.add('todoList')
    itemInput.addEventListener('keypress',saveItem);
    itemInput.addEventListener('click', saveItem);
    event.target.parentNode.parentNode.prepend(itemInput);
    event.target.remove();
    itemInput.select();
}

function saveItem(event) {
    let inputValue = event.target.value;
    if (inputValue.length > 0 && (event.keyCode === 13)) {
        let li = document.createElement('li');
        li.addEventListener('click', editItem);
        li.textContent = event.target.value;
        event.target.parentNode.prepend(li);
        event.target.remove()
    }
} 

/* function saveItem(event) {
    let inputValue = event.target.value;
    if (inputValue.length > 0 && (event.keyCode === 13 || event.type === 'click')) {
        const li = document.querySelector('li');
        li.addEventListener('click', editItem);
        inputValue.textContent = li.textContent;
        event.target.parentNode.prepend(li);
        event.target.remove()
    }
} */ 