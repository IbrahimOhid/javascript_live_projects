// Select all needed element
const Password = document.querySelector('#password');
const Checkbox = document.querySelector('#checkbox');

//Select EventListener
Checkbox.addEventListener('click', ()=> {
    if(Password.type == 'password'){
        Password.type = 'text';
    }
    else{
        Password.type = 'password';
    }
})


