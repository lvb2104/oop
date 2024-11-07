abstract class Vehicle4 {
    private modelName: string | undefined;
    constructor() {
        console.log(`Created a vehicle ...`);
    }

    abstract run(): void;
}

class Car extends Vehicle4 {
    override run() {
        console.log(`Car is running ...`);
    }
}

class Truck2 extends Vehicle4 {
    override run() {
        console.log(`Truck is running ...`);
    }
}
class Motobike extends Vehicle4 {
    override run() {
        console.log(`Motobike is running ...`);
    }
}

const vehicleList = new Array<Vehicle4>;
vehicleList[0] = new Car();
vehicleList[1] = new Truck2();
vehicleList[2] = new Motobike();

for (let i = 0; i < 3; i++) {
    vehicleList[i].run();
}