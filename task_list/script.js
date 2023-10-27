const inputText = document.querySelector('#input_text');
const addTask = document.querySelector('#add_task');
const taskList = document.querySelector('#task_list');
const clearTask = document.querySelector('#clear_task');

addTask.addEventListener('click', addTasks);
taskList.addEventListener('click', taskLists);
clearTask.addEventListener('click', clearTasks);


function addTasks(){
   if(inputText.value === ''){
    alert('Please Write a Task');
   } else{
        const li = document.createElement('li');
        li.innerHTML = inputText.value + ' ';
        taskList.appendChild(li);
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'X';
        li.appendChild(link);
   }
   inputText.value = '';
   saveData();
}

function taskLists(e){
    if(e.target.hasAttribute('href')){
        const ele = e.target.parentElement;
        ele.remove();
        saveData();
    }
}

function clearTasks(){
    taskList.innerHTML = '';
}

function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}

function showLists(){
    taskList.innerHTML = localStorage.getItem('data');
}
showLists();