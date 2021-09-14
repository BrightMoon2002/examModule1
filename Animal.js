class Animal {
    constructor(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    setName(newName) {
        this.name = newName;
    }
    getName () {
        return this.name;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return "tên: " + this.getName() + " cân nặng là: " + this.getWeight();
    }
}

let objAnimal1 = new Animal();
objAnimal1.setName("Elephant");
objAnimal1.setWeight("45.6");
objAnimal1.toString();
console.log(objAnimal1.toString());

let objAnimal2 = new Animal("Lion", "2");
objAnimal2.setName("Mouse");


