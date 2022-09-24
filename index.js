let todo = document.querySelector(".todo");
let link = document.querySelector(".link");
let input = document.querySelector('input');




function getInputValue (){
    let inputValue = input.value;
    inputValue = " ";
    //clone = todoMain.cloneNode(true)
    //todo.appendChild(clone);
    createElements()
    
}

function createElements () {
    let todoMain = document.createElement("div");
    todoMain.style.backgroundColor = "yellow";    
    todoMain.classList.add("todoMain");
    let todoInput = document.createElement("input");
        todoInput.type = "checkbox";
        todoInput.classList.add("todoInput");
    let todoContent = document.createElement("div")
        todoContent.classList.add("todoContent");
    let todoText = document.createElement("span");
        todoText.classList.add("todoText"); 
        todoText.innerHTML = input.value;

    
    todo.appendChild(todoMain)
    todoMain.appendChild(todoInput)
    todoMain.appendChild(todoContent)
    todoContent.appendChild(todoText)
    


    
}

