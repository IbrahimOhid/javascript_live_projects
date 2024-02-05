window.addEventListener('scroll', ()=>{
    const Main = document.querySelector('#main');
    const contentPosition = Main.getBoundingClientRect().top;
    var scrollY = window.scrollY;
    if(contentPosition < scrollY){
        Main.classList.add('active');
    }
    else{
        Main.classList.remove('active');
    }
})