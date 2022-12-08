// Polyfill for Array.map()

Array.prototype.myMap = function(args) {
    let updatedArr = [];
    for (let i = 0; i < this.length; i++) {
        updatedArr.push(args(this[i]));
    }
    return updatedArr;
}
