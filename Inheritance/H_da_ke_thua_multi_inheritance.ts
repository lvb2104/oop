class Vehicle3 {
    private modelName: string | undefined;
    constructor() {

    }

    run(): void {
        console.log(`A vehicle is running ...`);
    }
}

class House {
    private area: number | undefined;
    set setArea(a: number) {
        this.area = a;
    }

    get getArea() {
        return this.area;
    }
}

// Use mixin or implements blabla but it's really hard to implement