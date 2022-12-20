// Code to demonstrate how AJAX requests work in JS

// AJAX uses synchronous handling 

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.response = 'json';

xhr.onload = function () {
    console.log(xhr.response);
};

xhr.onerror = function () {
    console.log('Error!');
};

xhr.send();
