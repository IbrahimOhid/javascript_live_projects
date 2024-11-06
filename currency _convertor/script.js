// selector
const inputAmountElm = document.querySelector("#input_amount");
const selectCurrencyElm = document.querySelector(".select-currency");
const currentRateElm = document.querySelector("#current-rate");
const convertBtnElm = document.querySelector("#convert-btn");
const msgElm = document.querySelector("#msg");

fetch("https://api.frankfurter.app/currencies ")
  .then((res) => res.json())
  .then((data) => {
    displayData(data);
  });

function displayData(data) {
  const allCurrencyCode = Object.entries(data);
  for (let i = 0; i < allCurrencyCode.length; i++) {
    selectCurrencyElm[0].innerHTML += `<option value="${allCurrencyCode[i][0]}">${allCurrencyCode[i][0]}</option>`;
    selectCurrencyElm[1].innerHTML += `<option value="${allCurrencyCode[i][0]}">${allCurrencyCode[i][0]}</option>`;
  }
}

function showMessage(msg, action = "danger") {
  const textMsg = `<div class="alert alert-${action}" role="alert">${msg}</div>`;
  msgElm.insertAdjacentHTML = textMsg;
}

convertBtnElm.addEventListener("click", (e) => {
  let currency1 = selectCurrencyElm[0].value;
  let currency2 = selectCurrencyElm[0].value;
  let inputValue = inputAmountElm.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, inputValue);
  } else {
    showMessage("Chose Different Currencies!");
  }
});

function convert(){
    fetch(`https://api.frankfurter.app/latest?amount=${inputValue}&from=${currency1}&to=${currency2}`)
    .then((res)=> res.json())
    .then((data)=>{
        currentRateElm.inputValue = Object.values(data.rates)[0]
    })
}