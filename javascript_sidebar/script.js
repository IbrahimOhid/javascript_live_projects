// select all needed element
const MenuBar = document.querySelector('#menu-bar');
const MainNav = document.querySelector('#main-nav');

// EventListener
MenuBar.addEventListener('click', ()=>{
    MainNav.style.display = 'block';
})
