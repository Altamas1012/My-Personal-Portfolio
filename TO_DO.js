// select element
const input = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Load todos from localStorage
const saved = localStorage.getItem('todos');
const todos = saved ? JSON.parse(saved) : [];


// Save todos
function saveTOdos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}


// Create todo
function creatTodoNote(todo, index) {

    const li = document.createElement('li');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!todo.completed;

    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        if (todo.completed) {
            textspan.style.textDecoration = 'line-through';
        } else {
            textspan.style.textDecoration = 'none';
        }

        saveTOdos();
    });


    // Text
    const textspan = document.createElement("span");

    textspan.style.margin = '0 8px';

    // ⭐ IMPORTANT
    textspan.textContent = todo.text;

    if (todo.completed) {
        textspan.style.textDecoration = 'line-through';
    }


    // Edit todo
    textspan.addEventListener("dblclick", () => {

        const newtext = prompt("Edit todo", todo.text);

        if (newtext !== null) {

            const updatedText = newtext.trim();

            if (updatedText !== "") {
                todo.text = updatedText;
                textspan.textContent = todo.text;
                saveTOdos();
            }
        }
    });


/// edit btn
    const edit = document.createElement('button');
    
     
     edit.textContent ="Edit";
     edit.style.background ="blue";
     edit.style.color="#fff";
 
     
          edit.addEventListener("click", () => {

        const newtext = prompt("Edit todo", todo.text);

        if (newtext !== null) {

            const updatedText = newtext.trim();

            if (updatedText !== "") {
                todo.text = updatedText;
                textspan.textContent = todo.text;
                saveTOdos();
            }
        }
    });
    
         

    // Delete todo
    const delbtn = document.createElement('button');
     delbtn.id="dbtn";
    delbtn.textContent = "Delete";
  

    delbtn.addEventListener("click", () => {
       

        // ⭐ IMPORTANT: todos, not todo
        todos.splice(index, 1);

        saveTOdos();
        render();
    });

    
    li.appendChild(checkbox);
    li.appendChild(textspan);
    li.appendChild(edit);
    li.appendChild(delbtn);
   

    return li;
}


// Render
function render() {

    list.innerHTML = '';

    todos.forEach((todo, index) => {

        const node = creatTodoNote(todo, index);

        list.appendChild(node);
    });
}


// Add todo
function addtodo() {

    const text = input.value.trim();

    if (!text) {
        return;
    }

    // Add todo object
    todos.push({
        text: text,
        completed: false
    });

    input.value = '';

    saveTOdos();
    render();
}


// Button click
addbtn.addEventListener('click', addtodo);
input.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        addtodo()
    }
})


// Initial render
render();