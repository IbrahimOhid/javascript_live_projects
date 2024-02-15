function resultClear() {
    document.querySelector('#result').value = '';
}

function calculate(Newvalue){
    document.querySelector('#result').value += Newvalue;
}

function result() {
    const result = document.querySelector('#result').value;
    const method = eval(result);
    document.querySelector('#result').value= method;
}

