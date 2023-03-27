// Композиция и Агрегация


class Engine {
    drive() {
        console.log('Двигатель работает');
    }
}

class Wheel {
    drive() {
        console.log('Колеса едут');
    }
}

class Freshener {

}

class Flat {
    freshener: Freshener;

    constructor(freshener) {
        this.freshener = freshener;
    }
}

class Car {
    engine: Engine;
    wheels: Wheel[];
    freshener: Freshener;

    constructor(freshener) {
        //Агрегация 
        this.freshener = freshener;
        // Композиция
        this.engine = new Engine();
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
    }

    //делегирование
    drive() {
        this.engine.drive();
        for(let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive();
        }
    }

}

const bmw = new Car();
bmw.drive();