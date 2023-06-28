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
    const span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    span.className = 'close';
    li.appendChild(span);
    const span2 = document.createElement("span");
    span2.innerHTML = '<i class="fa-solid fa-pen"></i>';
    span.className = 'edit';
    li.appendChild(span2);


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

    span.addEventListener('click', function(){
        const div = this.parentElement;
        div.style.display = 'none';
    })

    span2.addEventListener('click', editItem)
}

function editItem(event) {
    let item = event.target.innerHTML;
    let itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.value = item;
    itemInput.classList.add('edit')
    itemInput.addEventListener('keypress',saveItem);
    itemInput.addEventListener('click', saveItem);
    event.target.parentNode.prepend(itemInput);
    event.target.remove();
    itemInput.select();
}

function saveItem(event) {
    let inputValue = event.target.value;
    if (event.target.value.length > 0 && (event.keyCode === 13 || event.type === 'click')) {
        let li = document.createElement('li');
        li.addEventListener('click', editItem);
        li.textContent = event.target.value;
        event.target.parentNode.prepend(li);
        event.target.remove()
    }
}
