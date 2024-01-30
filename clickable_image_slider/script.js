// select all needed element
const allImage = ['/clickable_image_slider/img/js.jpg', '/clickable_image_slider/img/laptop.jpg', '/clickable_image_slider/img/print.jpg'];
const SlideImage = document.querySelector('#slide-img');
const PreviousButton = document.querySelector('#previous-btn');
const NextButton = document.querySelector('#next-btn');

var index = 0;
var imgLen = allImage.length;

//NextButton EventListener
NextButton.addEventListener('click', ()=>{
    index++;
    if(index >= imgLen){
        index = 0;
        SlideImage.src = allImage[index];
    }
    else{
        SlideImage.src = allImage[index];
    }
})

//PreviousButton EventListener
PreviousButton.addEventListener('click', ()=>{
    index--;
    if(index < 0 ){
        index = imgLen - 1;
        SlideImage.src = allImage[index];
    }
    else{
        SlideImage.src = allImage[index];
    }
})

