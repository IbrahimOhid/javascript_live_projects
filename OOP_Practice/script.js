// const obj = {};
// obj.name = "Mohammad";
// obj.age = 27;
// console.log(obj);

const Computer = function(name, model){
    this.name = name;
    this.model = model;
    this.aboutComputer = function(){
        console.log(`This Computer name is ${this.name} and The model is ${this.model}`);
    }
}

const dell = new Computer('Dell', 'DKF348Z');
const hp = new Computer('HP', 'HP1348Z');

console.log(dell);
console.log(hp);

dell.aboutComputer();
hp.aboutComputer();