const printText = () => {
    console.log('Printed!!');
};

const debounce = (cb, delay) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb()
        }, delay);
    }
};

const optimisedPrintText = debounce(printText, 1000);