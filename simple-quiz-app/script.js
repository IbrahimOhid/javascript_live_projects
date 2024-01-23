// select all needed element
const AnswerOne = document.querySelector('#answer1');
const AnswerTwo = document.querySelector('#answer2');
const AnswerThree = document.querySelector('#answer3');
const ResultBtn = document.querySelector('#result-btn');

//EventListener
ResultBtn.addEventListener('click', (event) => {
    event.preventDefault();
    var count = 0;
    if (AnswerOne.checked) {
        count++;
    }
    if (AnswerTwo.checked) {
        count++;
    }
    if (AnswerThree.checked) {
        count++;
    }
    alert('Your Result ' + count);
})