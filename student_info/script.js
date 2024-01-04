const Student_Number = document.querySelector('#student_number').value;
const input_value = parseInt(Student_Number);
const Button = document.querySelector('#btn');

Button.addEventListener('click', () => {
    switch (Student_Number) {
        case 1:
            document.write('<h1>hello</h1>')
            break;
    
        default:
            break;
    }
})
