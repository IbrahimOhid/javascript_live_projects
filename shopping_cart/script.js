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