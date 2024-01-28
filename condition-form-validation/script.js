// select all needed element
const BanglaNumber = document.querySelector('#bangla-number');
const EnglishNumber = document.querySelector('#english-number');
const SubmitBtn = document.querySelector('#submit');



// EventListener Bangla Marks number 
BanglaNumber.addEventListener('input', (event) => {
    event.preventDefault();
    if (BanglaNumber.value > 100) {
        BanglaNumber.style.background = 'blue';
        BanglaNumber.style.color = 'white';
    }
    if (BanglaNumber.value < 0) {
        BanglaNumber.style.background = 'black';
        BanglaNumber.style.color = 'white';
    }
})

// EventListener English Marks number 
EnglishNumber.addEventListener('input', (event) => {
    event.preventDefault();
    if (EnglishNumber.value > 100) {
        EnglishNumber.style.background = 'red';
        EnglishNumber.style.color = 'white';
    }
    if (EnglishNumber.value < 0) {
        EnglishNumber.style.background = 'green';
        EnglishNumber.style.color = 'white';
    }
})