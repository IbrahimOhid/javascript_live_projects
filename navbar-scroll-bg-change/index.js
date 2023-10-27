window.addEventListener('scroll', changeBg);

function changeBg(){
    var navbar = document.querySelector('#navbar');
    var scrollValue = window.scrollY;
    if(scrollValue >= 100){
        navbar.classList.add('change-navbar-bg');
    }else{
        navbar.classList.remove('change-navbar-bg');
    }
}