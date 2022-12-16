const switchBtn = document.getElementById("switch");
const body = document.body;

switchBtn.addEventListener('click', function () {
    if (body.classList.contains('fire-off')) {
        body.classList.remove('fire-off');
        switchBtn.classList.remove('switched');
    } else {
        body.classList.add('fire-off');
        switchBtn.classList.add('switched');
    }
});