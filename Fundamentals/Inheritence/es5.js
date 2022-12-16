function Bird(type, color) {
    this.type = type;
    this.color = color;

    this.fly = () => console.log(`A ${this.color} coloured ${this.type} is flying`);

    this.walk = () => console.log(`A ${this.color} coloured ${this.type} can walk`);
};

// Such functions are defined once and do not have access to the local variables when defined using arrow functions but
// when defined using the constructor functions always have, irrespective of the type of function (arrow or anonymous)

// This will have access to 'this'
Bird.prototype.message = function() {
    console.log(`Save all birds -----> ${this.type}`); 
};

// This will not have access to 'this' (ordinary arrow function behaviour, but ordinary function will have access to 'this')
Bird.prototype.someRandom = () => console.log(`Printing this without instance values => ${this.type} and ${this.color}`);







function Parrot(type, color) {          // A parrot is a type of bird which can TALK apart from walking and flying
    Bird.call(this, type, color);
    
    this.talk = () => console.log(`A ${this.color} coloured ${this.type} can talk, since it is a Parrot.`)
};

// This is used to create the Parrot's prototype from Birds prototype
Parrot.prototype = Object.create(Bird.prototype);





//#region Testing the objects

console.log('-----------------------------1 starts-----------------------------');
const parrot1 = new Bird('Sparrow', 'Green');
// parrot1.fly();
// // parrot.talk();          // not accesible as this is an objet of Bird class
parrot1.message();
// parrot1.someRandom();       // this will print undefined every place where the reference to 'this' is made

console.log(parrot1.__proto__);

console.log('-----------------------------2 starts-----------------------------');
const parrot2 = new Parrot('Parrot', 'Blue');
// console.log(parrot2.__proto__);
// parrot2.fly();
// parrot2.talk();         // Accessible as it is defined in Parrot class

// This is not valid since we added the message function to the Bird prototype so it is not inherited directly like other functions
parrot2.message(); 

//#endregion
