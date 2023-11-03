//Phone ⤵

const phoneMinus = document.querySelector('#phone-minus');
const phonePlus = document.querySelector('#phone-plus');
const phoneTotal = document.querySelector('#phone-total');
const phoneAmount = document.querySelector('#phone-amount');

function updatePhoneChange(isIncrease){
   const increasePhone = parseInt(phoneTotal.value);
   if(isIncrease == true){
      phoneTotal.value = increasePhone + 1;
   }
   else if(isIncrease == false &&  increasePhone > 0){
      phoneTotal.value = increasePhone - 1;
   }
   const totalPhoneAmount = parseInt(phoneTotal.value);
   phoneAmount.innerText = totalPhoneAmount * 1219;

   calculateTotal();
}

phonePlus.addEventListener('click', () => {
   updatePhoneChange(true);
   
});

phoneMinus.addEventListener('click', () => {
   updatePhoneChange(false)
   
})

//Case ⤵

const caseMinus = document.querySelector('#case-minus');
const casePlus = document.querySelector('#case-plus');
const caseTotal = document.querySelector('#case-total');
const caseAmount = document.querySelector('#case-amount');

function updateCaseChange(isIncrease){
   const increaseCase = parseInt(caseTotal.value);
   if(isIncrease == true){
      caseTotal.value = increaseCase + 1;
   }
   else if(isIncrease == false &&  increaseCase > 0){
      caseTotal.value = increaseCase - 1;
   }
   const totalCaseAmount = parseInt(caseTotal.value);
   caseAmount.innerText = totalCaseAmount * 59;

   calculateTotal();
}

casePlus.addEventListener('click', () => {
   updateCaseChange(true);
   
});

caseMinus.addEventListener('click', () => {
   updateCaseChange(false)
   
})

const totalPrice = document.querySelector('#total-price');

function calculateTotal(){
   const phoneAmountPrice = parseInt(phoneTotal.value);
   const caseAmountPrice = parseInt(caseTotal.value)
   const totalPriceAmount = phoneAmountPrice * 1219 + caseAmountPrice * 59;
   totalPrice.innerText = totalPriceAmount;
}


