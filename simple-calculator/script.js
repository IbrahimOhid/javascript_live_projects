const Result = document.querySelector('#result');
const Form = document.querySelector('form');
const NumberOne = Form.querySelector('#num1');
const NumberTwo = Form.querySelector('#num2');
const SelectCalculation = Form.querySelector('#select-calculation');
const CalculateBtn = Form.querySelector('#calculate-btn')



CalculateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const numberOne = NumberOne.value;
    const numberTwo = NumberTwo.value;
    const addition = numberOne + numberTwo;
    if(SelectCalculation.value === 'addition'){
        Result.innerHTML = addition;
    }
})