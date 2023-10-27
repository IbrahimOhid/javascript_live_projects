const bookName = document.querySelector('#book-name');
const authorName = document.querySelector('#author');
const yearName = document.querySelector('#year');
const addBook = document.querySelector('#add-book');
const bookList = document.querySelector('#book-list');
const removeBookList =document.querySelector('#remove-book-list');


addBook.addEventListener('click', addBooks);
bookList.addEventListener('click', removeBook);
removeBookList.addEventListener('click', removeBookLists);



function addBooks(e){
    e.preventDefault();
    if(bookName.value === '' && authorName.value === '' && yearName.value === ''){
        alert('Please Fill up Form');
    }else{
        const newRow = document.createElement('tr');

        const newBook = document.createElement('th');
        newBook.innerHTML = bookName.value;
        newRow.appendChild(newBook);

        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = authorName.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('th');
        newYear.innerHTML = yearName.value;
        newRow.appendChild(newYear);

        const newLink = document.createElement('a');
        newLink.style.color = 'red';
        newLink.setAttribute('href', '#');
        newLink.innerHTML = 'X';
        newRow.appendChild(newLink);

        bookList.appendChild(newRow);

        saveData();

        bookName.value = '';
        authorName.value = '';
        yearName.value = '';
    }
}

function removeBook(e){
    if(e.target.hasAttribute('href')){
        const ele = e.target.parentElement;
        ele.remove();
        saveData();
    }
}

function removeBookLists(){
    bookList.innerHTML = '';
}

function saveData(){
    localStorage.setItem('data', bookList.innerHTML);
}

function showList(){
    bookList.innerHTML = localStorage.getItem('data');
}
showList();