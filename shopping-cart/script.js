const inputValue = document.querySelector('#value');
const plusBtn = document.querySelector('#plusBtn');
const minusBtn = document.querySelector('#minusBtn');
const iphoneBalance = document.querySelector('#iphoneBalance');

plusBtn.addEventListener('click', () => {
    const plusValue = inputValue.value++;
    value.innerText = plusValue;
    const totalIphoneBalance = iphoneBalance.innerText;
    const finalIphoneBalance = totalIphoneBalance * 2;
    iphoneBalance.innerHTML = finalIphoneBalance;
})

minusBtn.addEventListener('click', () => {
    
})