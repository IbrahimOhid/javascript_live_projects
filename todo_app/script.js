// find the element
const InputText = document.querySelector('#input-text');
const AddTodo = document.querySelector('#add-todo');
const Lists = document.querySelector('#lists');



const newTodo = (event) => {
    event.preventDefault();
    const TodoValue = InputText.value;
    const TodoElement = document.createElement('li');
    TodoElement.innerHTML = `<span>${TodoValue}</span> <span><button class="btn-primary px-3 py-1 rounded-md border" id="todo-remove">Remove</button></span>`;
    Lists.appendChild(TodoElement);
    InputText.value = '';
}

//addEventListener
AddTodo.addEventListener('click', newTodo);
