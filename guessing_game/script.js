const Form = document.querySelector('form');
const Guess_Number = Form.querySelector('#guess_number');
const Result_Text = Form.querySelector('.result_text');


Form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkResult(Guess_Number.value);
    Guess_Number.value = '';
})

function checkResult (value) {
    const randomNum = getRandomNumber(10)
    if (randomNum === getRandomNumber){
        Result_Text.innerHTML = `You Have Won`;
    }
    else{
        Result_Text.innerHTML = `You Have Lost. Random Number Was ${randomNum}`;
    }
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit + 1)
}