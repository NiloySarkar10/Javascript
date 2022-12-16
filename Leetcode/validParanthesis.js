// Valid paranthesis problem

const isValid = function(s) {
    const openBracesSet = ['(', '{', '['];
    const bracesCombo = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const bracesSet = s.split('');
    let currentOpenBrace = [];
    let currentCloseBrace = [];
    let doesSetHaveBothTypes = false;
    bracesSet.reverse();
    while (bracesSet.length > 0) {
        let item = bracesSet.pop();
        if (openBracesSet.includes(item)) {
            currentOpenBrace.push(item);
        } else {
            currentCloseBrace.push(item);
        }
        if (currentOpenBrace.length === 0 && currentCloseBrace.length !== 0) return false;
        if (currentOpenBrace.length > 0 && currentCloseBrace.length > 0) {
            doesSetHaveBothTypes = true;
            if (bracesCombo[currentOpenBrace[currentOpenBrace.length-1]] !== currentCloseBrace[currentCloseBrace.length-1]) {
                return false;
            } else {
                currentOpenBrace.pop();
                currentCloseBrace.pop();
            }    
        }
        if (bracesSet.length === 0 && currentOpenBrace.length !== 0) return false;
    }
    return doesSetHaveBothTypes;
};

var isValidOptimal = function(s) {   
    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) stack.push(map[c])
        else if (c !== stack.pop()) return false;
    }
    
    return !stack.length;
};

console.log(isValidOptimal('([])'));

