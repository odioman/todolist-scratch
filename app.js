const input = document.querySelector('.input')
const ul = document.querySelector('.todoList')


//add a check mark when clicking on li


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


    //ev.target.classList.toggle('checked')
    checkbox.addEventListener('click', function(ev) {
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
}
