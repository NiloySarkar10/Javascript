// Implement a function which returns the sum of the passed arguments
// sum(1)(2)(3)(4) => 10

const sum = a => b => b ? sum(a+b) : a;