class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info(name, age) {
        console.log(`${this.name} is ${this.age} old.`);
    }
}
const person1 = new Person("Thomas", 26);
person1.info();