const bulb = document.querySelector('#bulb');

const lightOn = document.querySelector('#on');
const lightOff = document.querySelector('#off');

lightOff.addEventListener('click', onButton = () => {
    bulb.src = '/light-on-off/img/bulb-off.gif';
});

lightOn.addEventListener('click', offButton = () => {
    bulb.src = '/light-on-off/img/bulb-on.gif';
})


