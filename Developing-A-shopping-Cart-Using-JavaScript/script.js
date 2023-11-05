//Nut cart ⤵
const nutBtn = document.querySelector('#nut-btn');
const nutCard = document.querySelector('#nut-card');
const nutRemove = document.querySelector('#nut-remove');


function nut (remove){
    if(remove == true){
        nutCard.style.display = 'block';
    }else if(remove == false){
        nutCard.remove();
    }
}

nutBtn.addEventListener('click', () => {
    nut(true);

})

nutRemove.addEventListener('click', () => {
    nut(false);
})

//Honey Nut cart ⤵ 

const honeyNutBtn = document.querySelector('#honey-nut-btn');
const honeyNutCard = document.querySelector('#honey-nut-card');
const honeyNutRemove = document.querySelector('#honey-nut-card');

function honeyNut (remove){
    if(remove == true){
        honeyNutCard.style.display = 'block';
    }else if(remove == false){
        honeyNutCard.remove();
    }
}

honeyNutBtn.addEventListener('click', () => {
    honeyNut(true);
})

honeyNutRemove.addEventListener('click', () => {
    honeyNut(false);
})

//Sarisha Oil cart ⤵ 
const sorishaOilBtn = document.querySelector('#sorisha-oil-btn');
const sorishaOilCard = document.querySelector('#sorisha-oil-card');
const sorishaOilRemove = document.querySelector('#sorisha-oil-remove');

function sorishaOil (remove){
    if(remove == true){
        sorishaOilCard.style.display = 'block';
    }else if(remove == false){
        sorishaOilCard.remove();
    }
}

sorishaOilBtn.addEventListener('click', () => {
    sorishaOil(true);
})

sorishaOilRemove.addEventListener('click', () => {
    sorishaOil(false);
})

//Honey cart ⤵ 
const honeyBtn = document.querySelector('#honey-btn');
const honeyCard = document.querySelector('#honey-card');
const honeyRemove = document.querySelector('#honey-remove');

function honey (remove){
    if(remove == true){
        honeyCard.style.display = 'block';
    }else if(remove == false){
        honeyCard.remove();
    }
}

honeyBtn.addEventListener('click', () => {
    honey(true);
})

honeyRemove.addEventListener('click', () => {
    honey(false);
})