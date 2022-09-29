// one class is declared here nemed Car
class Car {
    // sending car value using object
    constructor(car) {
        this.car = car;

    }

    info() {
        return `I have a ${this.car}`;
    }
}
// This is child class 
class Model extends Car {
    constructor(name, model) {
        super(name);
        this.model = model;
    }
    // All information contains here we need to print it 
    info2() {
        return this.info() + ", It is a " + this.model;
    }
}

// This is object created for accessing class template
let obj1 = new Model("Ford", "Mustang");

// Printing output on our page
document.write(obj1.info2());
