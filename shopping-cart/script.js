const countValue = document.querySelector('#countValue');
const plusBtn = document.querySelector('#plusBtn');
const iphoneBalance = document.querySelector('#iphoneBalance');

plusBtn.addEventListener('click', () => {
   const plusValue = parseInt(countValue.value);
   const increaseCount = plusValue + 1;
   countValue.value = increaseCount;
   const totalIphoneAmount = increaseCount * 1219;
   iphoneBalance.innerText = totalIphoneAmount;

})


const minusBtn = document.querySelector('#minusBtn');
// minusBtn.addEventListener('click', () => {
//     const minusValue = parseInt(inputValue.value--);
//     countValue.innerText = minusValue;
// })