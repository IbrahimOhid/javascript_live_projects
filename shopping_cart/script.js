// Plus Button
function increment(Inc, prc, itm){
    const count = document.getElementById(Inc);
    const price = document.getElementById(prc);
    const item = document.getElementById(itm);
    const ProductAmount = document.querySelector('#product-amount');
    const DeliveryCharge = document.querySelector('#delivery-charge');
    const TotalAmount = document.querySelector('#total-amount');
    if(count.value >= 5){
        count.value = 5;
        alert('Only Five Product Added');
    }
    else{
        count.value++;
        const ItemAmount = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = ItemAmount;
        // product Amount increment
        const amount =   parseInt(price.innerHTML) + parseInt(ProductAmount.innerHTML);
        ProductAmount.innerHTML = amount;
        // Total Amount & Delivery Charge increment
        const finalAmount = parseInt(ProductAmount.innerHTML) + parseInt(DeliveryCharge.innerHTML);
        TotalAmount.innerHTML = finalAmount;
    }
}

// Minus Button
function decrement(Dec, prc, itm){
    const count = document.getElementById(Dec);
    const price = document.getElementById(prc);
    const item = document.getElementById(itm);
    const ProductAmount = document.querySelector('#product-amount');
    const DeliveryCharge = document.querySelector('#delivery-charge');
    const TotalAmount = document.querySelector('#total-amount');
    if(count.value <= 0){
        count.value = 0;
    }
    else{
        count.value--;
        const ItemAmount = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = ItemAmount;
        // // product Amount decrement
        const amount =   parseInt(ProductAmount.innerHTML) - parseInt(price.innerHTML);
        ProductAmount.innerHTML = amount;
        // Total Amount & Delivery Charge decrement
        const finalAmount = parseInt(ProductAmount.innerHTML) + parseInt(DeliveryCharge.innerHTML);
        TotalAmount.innerHTML = finalAmount;
    }
}