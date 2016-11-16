class Animal {
    constructor(public name: string) { }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

    dance() {
        console.log('Dance wid me fool!');
    }
}

export default Animal;
