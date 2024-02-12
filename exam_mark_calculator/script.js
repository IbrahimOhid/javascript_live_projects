// all select needed element
const Math = document.querySelector('#math');
const English = document.querySelector('#english');
const Bangla = document.querySelector('#bangla');
const Science = document.querySelector('#science');
const Submit = document.querySelector('#submit');
const Mark = document.querySelector('#mark');
const Average = document.querySelector("#average");
const Grade = document.querySelector("#grade");
const PassFail = document.querySelector('#pass-fail');
const allInput = document.querySelectorAll('input');

// for loop 
for (var i = 0; i < allInput.length; i++) {
    allInput[i].addEventListener('input', () => {
        for (var j = 0; j < allInput.length; j++) {
            if (allInput[j].value > 100) {
                allInput[j].style.background = 'blue';
                allInput[j].style.color = 'white';
            }
        }
    })
}

//EventListener
Submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (Math.value == '' || English.value == '' || Bangla.value == '' || Science.value == '') {
        alert('All Input Please');
    }
    else {
        const MathValue = parseInt(Math.value);
        const EnglishValue = parseInt(English.value);
        const BanglaValue = parseInt(Bangla.value);
        const ScienceValue = parseInt(Science.value);
        const totalMark = MathValue + EnglishValue + BanglaValue + ScienceValue;
        Mark.textContent = totalMark;
        const averageMark = totalMark / 4;
        Average.textContent = averageMark;

        // grade start herer
        if (averageMark > 80 && averageMark < 100) {
            Grade.textContent = 'A+';
        }
        else if (averageMark > 70 && averageMark < 79) {
            Grade.textContent = 'A';
        }
        else if (averageMark > 60 && averageMark < 69) {
            Grade.textContent = 'A-';
        }
        else if (averageMark > 50 && averageMark < 59) {
            Grade.textContent = 'B';
        }
        else if (averageMark > 40 && averageMark < 49) {
            Grade.textContent = 'C';
        }
        else if (averageMark > 33 && averageMark < 39) {
            Grade.textContent = 'D';
        }
        else {
            Grade.textContent = 'F';
        }

        if (averageMark < 39) {
            PassFail.textContent = 'You Are Failed';
        }
        else {
            PassFail.textContent = 'You Are Passed';
        }
    }
    Math.value = '';
    English.value = '';
    Bangla.value = '';
    Science.value = '';
});
