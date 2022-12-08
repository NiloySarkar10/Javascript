// Polyfill for bind

const printDetails = function(gender, age) {
    console.log(`Details are: ${this.firstName}  ${this.lastName} is a ${gender} of age ${age}`);
}

let myDetails = {
    firstName: "Niloy",
    lastName: "Sarkar",
};

// original function
printDetails.bind(myDetails, 'Boy', 26);

// polyfill Bind
Function.prototype.myBind = function(context, ...args) {
    context.fn = this;
    return function(...arguments) {
        context.fn(...args, ...arguments);
    }
};

const printMyDetails = printDetails.myBind(myDetails, 'Boy', 26);
printMyDetails();
