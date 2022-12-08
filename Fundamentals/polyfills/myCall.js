// Polyfill for call

const printDetails = function(gender, age) {
    console.log(`Details are: ${this.firstName}  ${this.lastName} is a ${gender} of age ${age}`);
}

let myDetails = {
    firstName: "Niloy",
    lastName: "Sarkar",
};

// original function
printDetails.call(myDetails, 'Boy', 26);

// polyfill call
Function.prototype.myCall = function(context, ...args) {
    context.fn = this;
    context.fn(...args);
};

printDetails.myCall(myDetails, 'Boy', 26);
