class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

let student1 = new Student("Dev", 15);

console.log(student1.getDetails())