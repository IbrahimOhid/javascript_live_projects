// all selector
const inputAmountElm = document.querySelector("#input_amount");
const fromCurrencyElm = document.querySelector("#fromCurrency");
const toCurrencyElm = document.querySelector("#toCurrency");
const currentRateElm = document.querySelector("#current-rate");
const convertBtnElm = document.querySelector("#convert-btn");
const msgElm = document.querySelector("#msg");

let amount = 0;
inputAmountElm.value = 1;

// api
fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
.then((res)=> res.json())
.then((data)=>{
    displayData(data)
})

function hideMsg(){
    msgElm.textContent = '';
}

function showMessage(msg, action='danger'){
    const textMsg = `<div class="alert fw-bold text-center text-danger alert-${action}" role="alert">${msg}</div>`;
    msgElm.insertAdjacentHTML('afterbegin', textMsg);
    setTimeout(() => {
        hideMsg();
    }, 2000);
}
    
function convertCurrency(fromCurrencyElm, toCurrencyElm, amount){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrencyElm}.json`)
    .then((res)=> res.json())
    .then((data)=>{
        const rate = data[fromCurrencyElm][toCurrencyElm];

        const convertAmount = (rate * amount).toFixed(2);
        const showAmount = `${amount} ${fromCurrencyElm.toUpperCase()} = ${convertAmount} ${toCurrencyElm.toUpperCase()}`
        currentRateElm.textContent = showAmount;
    })
}

function displayData(data){
   for(let currency in data){
    const selectOption = ` <option value="${currency}">${currency.toUpperCase()}</option>`;
    fromCurrencyElm.innerHTML += selectOption;
    toCurrencyElm.innerHTML += selectOption;
   }

   convertBtnElm.addEventListener('click',(e)=>{
    e.preventDefault();
    let fromCurrency = fromCurrencyElm.value;
    let toCurrency = toCurrencyElm.value;
    let amount = inputAmountElm.value;
    if(fromCurrency != toCurrency){
        convertCurrency(fromCurrency, toCurrency, amount)
    }
    else{
        showMessage('Chose Different Currency')
    }
    
   })
}

