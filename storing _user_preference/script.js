const SelectFontSize = document.querySelector('#selectFontSize');
const SelectBackground = document.querySelector('#selectBackground');
const ResetButton = document.querySelector('#resetBtn');
const Paragraph = document.querySelector('#paragraph');

SelectFontSize.addEventListener('change', (event) => {
    Paragraph.style.fontSize = event.target.value;
})

SelectBackground.addEventListener('change', (event) => {
    Paragraph.style.background = event.target.value;
})