// select all needed element
const TopImg = document.querySelector('#top-img');
const Img1 = document.querySelector('#img1');
const Img2 = document.querySelector('#img2');
const Img3 = document.querySelector('#img3');
const Img4 = document.querySelector('#img4');

// select EventListener
Img1.addEventListener('click', ()=>{
    TopImg.src = Img1.src;
});

Img2.addEventListener('click', ()=>{
    TopImg.src = Img2.src;
});

Img3.addEventListener('click', ()=>{
    TopImg.src = Img3.src;
});

Img4.addEventListener('click', ()=>{
    TopImg.src = Img4.src;
});
