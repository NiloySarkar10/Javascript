
class Bird {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    fly = () => console.log(`A ${this.color} coloured ${this.type} is flying`);

    walk = () => console.log(`A ${this.color} coloured ${this.type} can walk`);

};

// Such functions are defined once and do not have access to the local variables which the constructor functions have
// But in ES6 we can access this from even the child classes
Bird.prototype.message = () => console.log(`Save all birds!!`); 

class Parrot extends Bird {
    constructor(type, color) {
        super(type, color);
    }

    talk = () => console.log(`A ${this.color} coloured ${this.type} can talk, since it is a Parrot.`)

};

//#region Testing the objects

const parrot1 = new Bird('Parrot', 'Green');
parrot1.fly();
parrot1.walk();
// parrot1.talk();     // Not accesible from bird object
parrot1.message();

const parrot2 = new Parrot('Parrot', 'Red');
parrot2.fly();
parrot2.talk();
parrot2.message();

//#endregion


