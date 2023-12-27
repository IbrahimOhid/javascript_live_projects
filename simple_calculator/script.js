const num1 = parseInt(prompt("Enter a 1st Number : "))
const num2 = parseInt(prompt("Enter a 2st Number : "))

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2

const add = document.querySelector('.addition').innerHTML = "Addition: " + addition;
const sub = document.querySelector('.subtraction').innerHTML = "Subtraction: " + subtraction;
const mul = document.querySelector('.multiplication').innerHTML = "Multiplication: " + multiplication;
const div = document.querySelector('.addition').innerHTML = "Division: " + division;
const mod = document.querySelector('.modulus').innerHTML = "Modulus: " + modulus;