const video = document.querySelector('#video');
const canvas = document.querySelector('#canvas');
const captureImg = document.querySelector('#imgBtn');

const webCam = navigator.mediaDevices.getUserMedia();
const context = canvas.getContext('2d');


if(webCam){
    navigator.mediaDevices.getUserMedia({
        video : true,
        audio : true
    })
    .then(function(live){
        video.srcObject = live;
    })
    .catch(function(error){
        console.log('Please Try Again');
    })
}

captureImg.addEventListener('click', ()=> {
    context.drawImage(video,0,0,500,500);
})