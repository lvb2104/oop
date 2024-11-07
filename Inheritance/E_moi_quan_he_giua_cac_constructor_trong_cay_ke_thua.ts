class Vehicle2 {
    private modelName: string | undefined;
    constructor(modelName: string) {
        this.modelName = modelName;
        console.log(`Created a vehicle with name ${this.modelName} \n`);
    }

    get getModelName(): string {
        return this.getModelName;
    }

    set setModelName(name: string) {
        this.modelName = name;
    }
}

class Taxi2 extends Vehicle2 {
    private kmCounter: number | undefined;
    constructor(name: string, num: number) {
        super(name);
        console.log(`Created a taxi with number ${num}\n`);
    }

    start(): void {
        console.log(`Started. Ready to run\n`);
    }
}

const taxi2 = new Taxi2('kia morning', 2104);