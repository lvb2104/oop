class Woman3 {
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

    // we don't have destructor in typescript
}