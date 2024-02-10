// all select needed element
const Math = document.querySelector('#math');
const English = document.querySelector('#english');
const Bangla = document.querySelector('#bangla');
const Science = document.querySelector('#science');
const Submit = document.querySelector('#submit');
const Mark = document.querySelector('#mark');
const Average = document.querySelector("#average");
const PassFail = document.querySelector('#pass-fail');

Submit.addEventListener('click', (event) => {
    event.preventDefault();
    const MathValue = parseFloat(Math.value);
    const EnglishValue = parseFloat(English.value);
    const BanglaValue = parseFloat(Bangla.value);
    const ScienceValue = parseFloat(Science.value);
    if (MathValue == '' || EnglishValue == '' || BanglaValue == '' || ScienceValue == '') {
        alert('All Input Please');
    }
    else {
        Mark.textContent = MathValue + EnglishValue + BanglaValue + ScienceValue;
    }
    Math.value = '';
    English.value = '';
    Bangla.value = '';
    Science.value = '';
    //    if(MathValue > 100 || EnglishValue > 100 || BanglaValue > 100 || ScienceValue > 100){
    //     Math.style.background = 'red';
    //    }
})
