// select all needed element
const Word = document.querySelector('#word');
const Character = document.querySelector('#character');
const Textarea = document.querySelector('#textarea');
const ClearBtn = document.querySelector('#clear-btn');

// EventListener Textarea
Textarea.addEventListener('input', () => {
    const textLength = Textarea.value.replace(/\s/g, '').length;

    // character count
    Character.innerHTML = textLength;

    //word count
    let getWord = Textarea.value;
    getWord = getWord.trim();

    const outputWord = getWord.split(' ');
    Word.innerHTML = outputWord.length;

    
})
// EventListener ClearBtn
ClearBtn.addEventListener('click', ()=> {
    Textarea.value = ''
    Character.innerHTML = 0;
    Word.innerHTML = 0;
})

