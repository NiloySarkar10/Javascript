const firstNum = document.querySelector('#num1');
const secondNum = document.querySelector('#num2');

const result = document.querySelector('.result');

if (window.Worker) {

    const myWorker = new Worker('worker.js');

    const actionOnInputValueChange = function() {
        if (firstNum.value === '' || secondNum.value === '') {
            return;
        }
        myWorker.postMessage([firstNum.value, secondNum.value]);
        console.log('Change registered in input. Posting message to worker.');
    }

    firstNum.onkeyup = actionOnInputValueChange;

    secondNum.onkeyup = actionOnInputValueChange;

    myWorker.onmessage = function (e) {
        result.textContent = e.data;
    }

} else {
    alert('Worker is not supported');
}

