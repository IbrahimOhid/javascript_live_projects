// const Body = document.querySelector('body');
// const isBlue = false;

// setInterval(() => {
//     if(isBlue){
//         Body.style.background = 'white';
//     }
//     else{
//         Body.style.background = 'blue';
//     }
// }, 1000);

// function operation(a, b) {
//     c = a + b;
//     d = a - b;
//     console.log(c, d)
// }
// operation(10, 8);

// function sayName(name) {
//     return 'Hello ' + name;
// }
// var names = sayName;
// var fullName = names('Ibrahim Ohid')
// //console.log(fullName);

// var num = [1, 2, 4];
// num.push = fullName;
// console.log(num);

// Object Oriented Programming

// const computer = function(){
//     console.log(this);
// }
// const pc = new computer();

// const obj = {};
// obj.name = "Mohammad";
// obj.age = 26;
// console.log(obj);

// const Computer = function(name, model, manuYear){
//     this.name = name;
//     this.model = model;
//     this.manuYear = manuYear;
//     this.aboutInfo = function(){
//         console.log(`This Computer Name is ${this.name} and Model is ${this.model}`);
//     }
// }
// const dell = new Computer('Dell', 'DK139O', '2020');
// const hp = new Computer('HP', 'JFD023', '2022');
// const lenovo = new Computer('LENOVO', 'TJD023', '2024');

// dell.aboutInfo();
// lenovo.aboutInfo();


// console.log(dell);
// console.log(hp);
// console.log(lenovo);

// const arr = [2, 7, 8, 10, 100, 99, 33, 31];
// const evenNum = arr.filter(Element => Element % 2 === 0);
// const oddNum = arr.filter(Element => Element % 2 === 1);
// console.log(evenNum);
// console.log(oddNum);

// Array.prototype.filter = function () {
//     var arr = [];
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] % 2 === 0) {
//             arr.push(this[i]);
//         }
//         return arr;
//     }
// }

// console.log([1, 2, 4, 5, 10, 98, 100].filter());

// plus button
function increment(count, prc, itm){
    const counts = document.getElementById(count);
    const price = document.getElementById(prc);
    const item = document.getElementById(itm);
    const ProductAmount = document.querySelector('#product-amount');
    const DeliveryCharge = document.querySelector('#delivery-charge');
    const TotalProductAmount = document.querySelector('#total-product-amount');
    if(counts.value >= 5){
        counts.value = 5;
        alert('Only Five Product Add');
    }
    else{
        counts.value++;
        const totalPrice = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = totalPrice;
        const Amount = parseInt(price.innerHTML) + parseInt(ProductAmount.innerHTML);
        ProductAmount.innerHTML = Amount;
        const finalAmount = parseInt(DeliveryCharge.innerHTML) + parseInt(ProductAmount.innerHTML);
        TotalProductAmount.innerHTML = finalAmount;
    }
}

// minus button
function decrement(count, prc, itm){
    const counts = document.getElementById(count);
    const price = document.getElementById(prc);
    const item = document.getElementById(itm);
    const ProductAmount = document.querySelector('#product-amount');
    const DeliveryCharge = document.querySelector('#delivery-charge');
    const TotalProductAmount = document.querySelector('#total-product-amount');
    if(counts.value <= 0){
        counts.value = 0;
    }
    else{
        counts.value--;
        const totalPrice = parseInt(item.innerHTML) - parseInt(price.innerHTML);
        item.innerHTML = totalPrice;
        const Amount = parseInt(ProductAmount.innerHTML) - parseInt(price.innerHTML);
        ProductAmount.innerHTML = Amount;
        const finalAmount = parseInt(ProductAmount.innerHTML) + parseInt(DeliveryCharge.innerHTML);
        TotalProductAmount.innerHTML = finalAmount;
    }
}