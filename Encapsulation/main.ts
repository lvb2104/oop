class Woman5 {
    private weight: number | undefined;
    private fullname: string | undefined;
    private age: number | undefined;
    public constructor(fullname: string, age: number) {
        console.log(`Create a new woman\n`);
        this.fullname = fullname;
        this.age = age;
    }

    set setAge(age: number) {
        this.age = age;
    }

    get getAge() {
        return this.age;
    }
}

const hariwon5 = new Woman5('Hariwon', 35);
console.log(hariwon5.getAge);
hariwon5.setAge = 20;
console.log(hariwon5.getAge)