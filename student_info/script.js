const studentRoll = document.querySelector('#student-roll');
const searchBtn = document.querySelector('#search-btn');
const studentInfo = document.querySelector('#student-info');


searchBtn.addEventListener('click', (event) => {
    const inputValue = studentRoll.value;
    studentRoll.value = '';
    if(inputValue == 1){
        const studentElement = document.createElement('p')
        studentElement.innerHTML = '<b>Roll:</b> 1<br> <b>Name:</b> Mohammad Ibrahim <br> <b>Location:</b> Eidgaon'
        studentInfo.appendChild(studentElement);
    }
    else if(inputValue == 2){
        const studentElement = document.createElement('p')
        studentElement.innerHTML = '<b>Roll:</b> 2 <br> <b>Name:</b> Ebna Osman <br> <b>Location:</b> Islamabad'
        studentInfo.appendChild(studentElement);
    }
    else if(inputValue == 3){
        const studentElement = document.createElement('p')
        studentElement.innerHTML = '<b>Roll:</b> 3 <br> <b>Name:</b> Hosna Mobarak <br> <b>Location:</b> Ramu'
        studentInfo.appendChild(studentElement);
    }
    else{
        alert('Please Input 1 to 3 Number: ')
    }
    
})