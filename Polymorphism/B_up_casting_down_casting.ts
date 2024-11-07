class Vehicle5 {
    private modelName: string | undefined;
    constructor() {
        console.log(`Created a vehicle`);
    }

    run() {
        console.log(`A vehicle is running ...`);
    }
}

class Car2 extends Vehicle5 {
    private ownerName: string | undefined;
    constructor() {
        super();
        console.log(`Created a car ...`);
        this.ownerName = 'None';
    }

    run() {
        console.log(`A car of ${this.ownerName} is running ...`);
    }
}

const car: Car2 = new Car2();
const vehicle: Vehicle5 = car;

car.run();
vehicle.run();

