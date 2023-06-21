class CreateToDoList {
    todo=[];
    currentTask = null
    constructor(render) {
        this.render = render;
        this.render.renderList(this.todo);
    }

    addTask(task) {
        this.todo.push(task);
        this.render.renderList(this.todo);
        localStorage.setItem("todo", JSON.stringify([...JSON.parse(localStorage.getItem("todo") || "[]"), {todo: task, completed: false }]));
    }

    removeTask(task) {
        this.todo = this.todo.filter((word) => word !== task);
        this.render.renderList(this.todo);
        let tasks = Array.from(JSON.parse(localStorage.getItem("todo")));
        tasks.forEach(task => {
            if (task.task === event.parentNode.children[1].value) {
                //delete task
                tasks.splice(tasks.indexOf(task), 1)
            }
        })
        localStorage.setItem("todo", JSON.stringify(tasks));
    }

    loadTask() {
        if (localStorage.getItem('todo') == null) {
            return
        }

        this.todo = Array.from(JSON.parse(localStorage.getItem('todo')));
    }

    editTask(event) {
        let tasks = Array.from(JSON.parse(localStorage.getItem(todo)));
        //check if task is empty
        if (event.value === '') {
            event.value = currentTask
            return
        }

        //task already exists
        tasks.forEach(task => {
            if (task.task === event.value) {
                event.value = currentTask;
                return
            }
        });

        //update/edit task
        tasks.forEach(task => {
            if (task.task === currentTask) {
                task.task = event.value;
            }
        })
        //update local storage
        localStorage.setItem("todo", JSON.stringify(tasks));
    }
}

class Render {
    constructor(input) {
        this.input = input;
        const taskInput = this.input.querySelector('input');
        const addButton = this.input.querySelector('button');
        const ul = this.input.querySelector('.todoList')
    

        addButton.addEventListener('click', () => {
            const task = taskInput.value.trim();
            if (task !== '') {
                list.addTask(task);
                taskInput.value = '';       
            }
        })

        ul.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const task = event.target.previousSibling.textContent;
                list.removeTask(task);
            }
        })
    }

    renderList(todo) {
        const ul = this.input.querySelector('.todoList');
        ul.innerHTML = '';
        todo.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            li.innerHTML = `
            <input type="checkbox" onclick="taskComplete(this)" class="check ${task.completed ? 'checked' : ''}">
            <input type="text" value="${task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this) onblur="editTask(this)">
            `
            //<button onclick="removeTask(task)">Delete</button> 
                 
            li.appendChild(deleteButton);
            ul.appendChild(li);
        })
    }
}

const render = new Render(document.querySelector('.container'));
const list = new CreateToDoList(render);