// select element
const Word = document.querySelector('#word');
const Character = document.querySelector('#character');
const Textarea = document.querySelector('#textarea');
const ClearBtn = document.querySelector('#clear-btn');

// EventListener
Textarea.addEventListener('input', () => {
    const textLength = Textarea.value.length;
    
    //total word
    Word.innerHTML = textLength;
})