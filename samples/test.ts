class A {
    a = true;
    public constructor() {
        // tslint:disable-next-line
        console.log("a");
    }

    isA() {
        return this.a;
    }
}

const b = new A();
