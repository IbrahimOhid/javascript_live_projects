const Title = document.querySelector('#title');

window.addEventListener('online', set);
window.addEventListener('offline', set);

function set() {
    if(navigator.onLine){
        Title.innerHTML = 'You Are Online ✌';
        Title.style.color = 'red';
    }
    else{
        Title.innerHTML = 'You Are Offline 😭';
        Title.style.color = 'blue';
    }
}
set()