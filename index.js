let todo = document.querySelector(".todo");
let link = document.querySelector(".link");
let input = document.querySelector('input');

function createTodos () {
    let todoMain = document.createElement("div");
    todoMain.classList.add("todoMain");
    let todoInput = document.createElement("input");
        todoInput.type = "checkbox";
        todoInput.classList.add("todoInput");
    let todoContent = document.createElement("div")
        todoContent.classList.add("todoContent");
    let todoText = document.createElement("input");
        todoText.classList.add("todoText"); 
        todoText.setAttribute('readonly', 'true')
        todoText.type = "text"
        todoText.value = input.value;
        input.value = ' ';
    let btns = document.createElement("div");
        btns.classList.add("btns");
    let edit = document.createElement("button");
        edit.classList.add("edit");
        edit.innerHTML = "Edit";
    let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = "Remove";
    

    edit.addEventListener('click', (e) => {
        if(edit.innerHTML == "Edit") {
            edit.innerHTML = "Save"
            todoText.removeAttribute('readonly', 'true');

        }else{
            edit.innerText = "Edit";
			todoText.setAttribute('readonly', 'true')
            todoText.type = "text"
        }

       
    })
    remove.addEventListener('click', (e) =>{
        todo.removeChild(todoMain)
    });


    todo.appendChild(todoMain);
    todoMain.appendChild(todoInput);
    todoMain.appendChild(todoContent);
    todoContent.appendChild(todoText);
    todoContent.appendChild(btns)
    btns.appendChild(edit)
    btns.appendChild(remove)

};







