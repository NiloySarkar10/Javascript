const lastWordLength = function (s) {
    const wordsArray = s.trim().split(' ');
    return wordsArray.pop().length;
};

console.log(lastWordLength('hello world'));
