function Person(name, age) {
    this.name = name;
    this.age = age;
}

const me = new Person('Joe', 20);

console.log(me); // {name: 'Joe', age: 20}

Person.prototype.greet = function() {
    console.log('Hi', this.name);
}

me.greet(); // Hi Joe

const you = new Person('Alice', 22);
you.greet(); // Hi Alice