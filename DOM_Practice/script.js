const Body = document.querySelector('body');
const isBlue = false;

setInterval(() => {
    if(isBlue){
        Body.style.background = 'white';
    }
    else{
        Body.style.background = 'blue';
    }
}, 1000);