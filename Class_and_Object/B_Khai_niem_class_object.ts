type BodySize = {
    size3ring: Array<number>;
    weight: number;
}

class Woman {
    public fullname?: string
    public bodySize?: BodySize;
    private age?: number;

    makeUp(): void {

    }

    introduce(): void {
        this.age = 45;
        if (this.bodySize)
            this.bodySize.weight = 45;
        console.log(`Hi! I'm a woman\n`)
        console.log(`I am ${this.age} years old\n`);
    }
}

const hariwon = new Woman();
console.log(hariwon);
hariwon.fullname = 'Hariwon';
hariwon.introduce();