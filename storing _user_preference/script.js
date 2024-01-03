const SelectFontSize = document.querySelector('#selectFontSize');
const SelectBackground = document.querySelector('#selectBackground');
const ResetButton = document.querySelector('#resetBtn');
const Paragraph = document.querySelector('#paragraph');

SelectFontSize.addEventListener('change', (event) => {
    const SelectedFontSize = event.target.value;
    Paragraph.style.fontSize = SelectedFontSize;
    localStorage.setItem('fontSize', SelectedFontSize);
})

SelectBackground.addEventListener('change', (event) => {
    const SelectedBackground = event.target.value;
    Paragraph.style.background = SelectedBackground;
    localStorage.setItem('backgroundColor', SelectedBackground)
})

ResetButton.addEventListener('click', () => {
    localStorage.removeItem('fontSize')
    localStorage.removeItem('backgroundColor')
})