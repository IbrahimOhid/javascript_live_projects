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
    
    if(NameValue== ''){
        alert("Enter a Name")
    }
    else if(IdValue== ''){
        alert("Enter a ID")
    }
    else if(DepartmentValue== ''){
        alert("Enter a Department")
    }
    else if(GpaValue== ''){
        alert("Enter a GPA")
    }

    const tr = document.createElement('tr');
    
    //for name
    const td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerHTML = NameValue;

    //for id
    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerHTML = IdValue;

    //for Department
    const td3 = document.createElement('td');
    tr.appendChild(td3);
    td3.innerHTML = DepartmentValue;

    //for gpa
    const td4 = document.createElement('td');
    tr.appendChild(td4);
    td4.innerHTML = GpaValue;
    NewTableData.appendChild(tr);

    Name.value = '';
    Id.value = '';
    Department.value = '';
    Gpa.value = '';

})