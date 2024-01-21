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

function sayName(name) {
    return 'Hello ' + name;
}
var names = sayName;
var fullName = names('Ibrahim Ohid')
//console.log(fullName);

var num = [1, 2, 4];
num.push = fullName;
console.log(num);
