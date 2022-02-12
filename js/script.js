const savedEmail = 'write2mahadi@yahoo.com';
const savedPass = 'qwerty';

document.getElementById('btn-submit').addEventListener('click', function () {
    login(savedEmail, savedPass);
    // console.log(emailInput + "  " + passInput);
})

function login(savedEmail, savedPass) {
    const emailInput = document.getElementById('email').value;
    const passInput = document.getElementById('password').value;
    if (emailInput == savedEmail && passInput == savedPass) {
        window.location.href = 'calculator.html';
    }
}