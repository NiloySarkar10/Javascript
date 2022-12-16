// Remove all the occurences of a given element from an array, in place and return the count of elements which are retained

const arr = [0, 1, 2, 2, 3, 0, 4];

const removeElement = function(nums, val) {
    let index = 0;
    let count = 0;
    while (index < nums.length) {
        if (nums[index] === null) return nums.length - count;
        if (nums[index] === val) {
            nums.splice(index, 1);
            nums.push(null);
            count++;
        } else {
            index++;
        }
    }
};


console.log(removeElement(arr, 2));
console.log({output: arr});