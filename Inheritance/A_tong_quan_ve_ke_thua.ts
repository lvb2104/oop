class Vehicle {
    run() {
        throw new Error("Method not implemented.");
    }
    private modelName: string | undefined;
    private version: number | undefined;
    get getModelName() {
        return this.modelName;
    }

    set setModelName(name: string) {
        this.modelName = name;
    }
}

class Taxi extends Vehicle {

}

class Truck extends Vehicle {

}

const taxi = new Taxi;
taxi.setModelName = 'Kia morning';
console.log(taxi.getModelName);