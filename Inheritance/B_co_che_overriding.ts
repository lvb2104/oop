class Vehicle1 {
    private modelName: string | undefined;
    private version: number | undefined;
    get getModelName() {
        return this.modelName;
    }

    set setModelName(name: string) {
        this.modelName = name;
    }

    public run(): void {
        console.log(`A vehicle is running ...`);
    }
}

class Taxi1 extends Vehicle1 {
    public run(): void {
        // overriding can't be overloading, it can't have different arguments
        super.run();
        console.log(`It's a taxi`);
    }
}

class Truck1 extends Vehicle1 {

}

const taxi1 = new Taxi1;
taxi1.setModelName = 'Kia morning';
taxi1.run();