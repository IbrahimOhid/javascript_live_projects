//  select all needed element
const Name = document.querySelector('#name');
const Id = document.querySelector('#id');
const Department = document.querySelector('#department');
const Gpa = document.querySelector('#gpa');
const AddStudent = document.querySelector('#add-student');

const NewTableData = document.querySelector('#new-table-data');



// EventListener
AddStudent.addEventListener('click', (event)=> {
    event.preventDefault();
    const NameValue = Name.value;
    const IdValue = Id.value;
    const DepartmentValue = Department.value;
    const GpaValue = Gpa.value;
    
    const NewTableElement = document.createElement('td');
    NewTableElement.appendChild(NameValue);
})