class Woman4 {
    private weight: number | undefined;
    static numberOfWoman: number | undefined;
    static what(): void {
        console.log(`Woman is to be love\n`);
        console.log(`There are ${Woman4.numberOfWoman} woman in program now\n`);
    }
}
Woman4.numberOfWoman = 0;
Woman4.what();