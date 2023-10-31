//Plus Btn event Handler

const phoneCountValue = document.querySelector('#phoneCountValue');
const phonePlusBtn = document.querySelector('#phonePlusBtn');
const iphoneBalance = document.querySelector('#iphoneBalance');
const subTotal = document.querySelector('#subTotal')

phonePlusBtn.addEventListener('click', () => {
   const plusValue = parseInt(phoneCountValue.value);
   const increaseCount = plusValue + 1;
   phoneCountValue.value = increaseCount;
   const totalIncreaseIphoneAmount = increaseCount * 1219;
   iphoneBalance.innerText = totalIncreaseIphoneAmount;
   const subTotalValue = parseInt(subTotal.innerText);
   const finalSubTotal = totalIncreaseIphoneAmount + subTotalValue;
   subTotal.innerText = finalSubTotal;
   

})

//minus Btn event Handler

const phoneMinusBtn = document.querySelector('#phoneMinusBtn');

phoneMinusBtn.addEventListener('click', () => {
   const minusValue = parseInt(phoneCountValue.value);
   const decreaseCount = minusValue - 1;
   phoneCountValue.value = decreaseCount;
   const totalDecreaseIphoneAmount = decreaseCount * 1219;
   iphoneBalance.innerHTML = totalDecreaseIphoneAmount;
})

//Plus Btn event Handler

const caseCountValue = document.querySelector('#caseCountValue');
const casePlusBtn = document.querySelector('#casePlusBtn');
const caseBalance = document.querySelector('#caseBalance');


casePlusBtn.addEventListener('click', () => {
   const plusValue = parseInt(caseCountValue.value);
   const increaseCount = plusValue + 1;
   caseCountValue.value = increaseCount;
   const totalIncreaseIphoneAmount = increaseCount * 59;
   caseBalance.innerText = totalIncreaseIphoneAmount;
   

})

//minus Btn event Handler

const caseMinusBtn = document.querySelector('#caseMinusBtn');

caseMinusBtn.addEventListener('click', () => {
   const minusValue = parseInt(caseCountValue.value);
   const decreaseCount = minusValue - 1;
   caseCountValue.value = decreaseCount;
   const totalDecreaseIphoneAmount = decreaseCount * 59;
   caseBalance.innerHTML = totalDecreaseIphoneAmount;
})

