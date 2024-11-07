class Woman2 {
    private weight: number | undefined;
    public fullname: string | undefined;
    public age: number | undefined;
    
    public constructor(fn?: string, a?: number)  {
        if (fn !== undefined && a !== undefined) {
            console.log(`Create a new woman\n`);
            this.fullname = fn;
            this.age = a;
        }
        else {
            this.fullname = 'Unknown';
            this.age = 0;
        }
    } 

    public introduce(): void {
        console.log(`Hi, my name is ${this.fullname}.\n`);
        console.log(`I am ${this.age} years old.\n`);
    }
}

const hariwon2 = new Woman2();
hariwon2.introduce();
const ngoctrinh = new Woman2('Ngoc trinh', 38);
ngoctrinh.introduce();