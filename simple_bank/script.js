const totalDeposit = document.querySelector('#totalDeposit');
const depositInput = document.querySelector('#depositInput');
const depositBtn = document.querySelector('#depositBtn');

const totalBalance = document.querySelector('#totalBalance');

const totalWithdraw = document.querySelector('#totalWithdraw');
const withdrawInput = document.querySelector('#withdrawInput');
const withdrawBtn = document.querySelector('#withdrawBtn');

//Deposit Button & Balance event handler
depositBtn.addEventListener('click', () => {
    const depositValue = parseFloat(depositInput.value);
    const currentDeposit = parseFloat(totalDeposit.innerText);
    const totalDepositAmount = currentDeposit + depositValue;
    totalDeposit.innerText = totalDepositAmount.toFixed(2);
    depositInput.value = '';

    const currentBalance = parseFloat(totalBalance.innerText);
    const totalBalanceAmount = currentBalance + depositValue;
    totalBalance.innerText = totalBalanceAmount.toFixed(2);
})

//withdraw Button event handler
withdrawBtn.addEventListener('click', () => {
    const withdrawValue = parseFloat(withdrawInput.value);
    const currentWithdraw = parseFloat(totalWithdraw.innerText);
    const totalWithdrawAmount = currentWithdraw + withdrawValue;
    totalWithdraw.innerText = totalWithdrawAmount.toFixed(2);
    withdrawInput.value = '';

    const finalBalance = parseFloat(totalBalance.innerText);
    const totalFinalBalance = finalBalance - withdrawValue;
    totalBalance.innerText = totalFinalBalance.toFixed(2);
})