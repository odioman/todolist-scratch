const input = document.querySelector('.input')
const ul = document.querySelector('.todoList')


//add a check mark when clicking on li
ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);

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

    const span = document.createElement("span");
    span.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    span.className = 'close';
    li.appendChild(span);

    span.addEventListener('click', function(){
        const div = this.parentElement;
        div.style.display = 'none';
    })
}