onmessage = function (e) {
    let dataArray = e.data;
    const finalValue = dataArray.reduce((prevVal, currVal) => {
        return prevVal * currVal;
    }, 1);
    let finalResult = 'Result: ' + finalValue;
    postMessage(finalResult);
};