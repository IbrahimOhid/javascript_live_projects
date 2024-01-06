const hexNumber = document.querySelector('#hex-number');
const selectColor = document.querySelector('#select-color');

selectColor.addEventListener('input', () => {
    const finalColor = selectColor.value;
    hexNumber.value = finalColor;
    document.querySelector('body').style.background = finalColor;
})