let counter = 0;
let betterCounter = 0;

const throttle = (cb, delay) => {
    let flag = true;
    return () => {
        if (flag) {
            cb();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    };
};

const printCounter = () => {
    console.log('Movement: ', ++counter);
};

const betterPrint = () => {
    console.log('------------------Better:----------------- ', ++betterCounter);
};


const betterMouseMoveFn = throttle(betterPrint, 1000);

document.addEventListener('mousemove', betterMouseMoveFn);

