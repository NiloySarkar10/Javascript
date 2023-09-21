// @ts-check

/**
 * Function to calculate the fibonacci value of a number using Memoization as an optimization technique.
 * @param {number} n Number for which we would be calculating the Fibonacci value.
 * @param {number[]} [preValues] preValues used to store the value for which we are calculating fibonacci
 * @returns {number} The fibonacci value
 */
const fib = (n, preValues = []) => {
    if (preValues[n] != null)
        return preValues[n];
    let result;
 
    if (n <= 2)
        result = 1;
    else
        result = fib(n - 1, preValues) + fib(n - 2, preValues);
 
    preValues[n] = result;
    return result;
}
 
// Calling Fibonacci fn.
console.log(fib(100));