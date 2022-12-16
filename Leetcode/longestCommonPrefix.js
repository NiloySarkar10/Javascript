// Brute force
const longestCommonPrefix = function(strs) {
    let letterPosition = 0;
    let commonPrefix = '';
    let flag = true;
    while (letterPosition < strs[0].length) {
        commonPrefix += strs[0][letterPosition];
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][letterPosition] !== commonPrefix[letterPosition]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            letterPosition++;
        } else {
            commonPrefix = commonPrefix.slice(0, letterPosition);
            break;
        }
    }
    return commonPrefix;
};

// Optimized solution
const longestCommonPrefixOptimised = function(strs) {
    return strs.reduce((prev, curr) => {
        let i = 0;
        while (prev[i] && curr[i] && prev[i] === curr[i]) {
            i++;
        };
        return prev.slice(0, i);
    });
}

const LCP = longestCommonPrefixOptimised(["flower","flow","flight"]);
// const LCP = longestCommonPrefix(["dog","racecar","car"]);
console.log({LCP});
