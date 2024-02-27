// Plus Button
function increment(IncDec){
    const count = document.getElementById(IncDec);

    if(count.value >= 5){
        count.value = 5;
        alert('Only Five Product Add');
    }
    else{
        count.value++;
    }
}

// Minus Button
function decrement(IncDec){
    const count = document.getElementById(IncDec);
    
    if(count.value <= 0){
        count.value = 0;
    }
    else{
        count.value--;
    }
}

//select all Needed product price 
const Price1 = document.querySelector('#price1');
const Price2 = document.querySelector('#price2');
const Price3 = document.querySelector('#price3');


//add to cart event
function addToCart(){
const ProductOnePrice =  parseInt(Price1.textContent)  * count.value;
const ProductTw0Price =  parseInt(Price2.textContent)  * count.value;
const ProductThreePrice =  parseInt(Price3.textContent)  * count.value;

}