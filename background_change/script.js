const fullBackground = document.querySelector('#full-background')
const selectColor = document.querySelector('#select-color');

selectColor.addEventListener('change',(event) => {
    const selectColor = event.target.value;
    fullBackground.style.background = selectColor;
})