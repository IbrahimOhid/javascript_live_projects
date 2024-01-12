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
    const Addition = parseFloat(numberOne + numberTwo);
    const Subtraction = parseFloat(numberOne - numberTwo);
    const Multiplication = parseFloat(numberOne * numberTwo);
    const Division = parseFloat(numberOne / numberTwo);
    const Modulus = parseFloat(numberOne % numberTwo);
    if(SelectCalculation.value === 'addition'){
        Result.innerHTML = Addition;
    }
    else if(SelectCalculation.value === 'subtraction'){
        Result.innerHTML = Subtraction;
    }
    else if(SelectCalculation.value === 'multiplication'){
        Result.innerHTML = Multiplication;
    }
    else if(SelectCalculation.value === 'division'){
        Result.innerHTML = Division;
    }
    else if(SelectCalculation.value === 'modulus'){
        Result.innerHTML = Modulus;
    }
    else{
        alert("Input a Number Please ☺")
    }
})