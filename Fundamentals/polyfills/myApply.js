// Polyfill for apply

const printDetails = function(gender, age) {
    console.log(`Details are: ${this.firstName}  ${this.lastName} is a ${gender} of age ${age}`);
}

let myDetails = {
    firstName: "Niloy",
    lastName: "Sarkar",
};

// original function
printDetails.apply(myDetails, ['Boy', 26]);

// polyfill apply
Function.prototype.myApply = function(context, args) {
    context.fn = this;
    context.fn(...args);
};

printDetails.myApply(myDetails, ['Boy', 26]);
