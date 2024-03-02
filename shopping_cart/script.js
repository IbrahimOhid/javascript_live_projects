// Plus Button
function increment(Inc, prc, itm){
    const count = document.getElementById(Inc);
    const price = document.getElementById(prc);
    const item = document.getElementById(itm);
    if(count.value >= 5){
        count.value = 5;
        alert('Only Five Product Added');
    }
    else{
        count.value++;
        const ItemAmount = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = ItemAmount;
    }
}

// Minus Button
function decrement(Dec, prc, itm){
    const count = document.getElementById(Dec);
    const price = document.getElementById(prc);
    const item = document.getElementById(itm);
    if(count.value <= 0){
        count.value = 0;
    }
    else{
        count.value--;
        const ItemAmount = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = ItemAmount;
    }
}