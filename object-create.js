//1.using object literal
const student = { name: 'Sakib al Hasan', job: 'Cricket' };
//2.constructor
const person = new Object();
console.log(person);
//3.
// const human = Object.create(null);
const human = Object.create(student);
console.log(human.job);

class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Humayun', 12);
console.log(peop);

//function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);