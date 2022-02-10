//Make a event handler for login button
document.getElementById('login-button').addEventListener('click', function () {
    const loginMail = document.getElementById('input-email');
    const loginPassword = document.getElementById('input-password');

    //Redirect the login page to bank page using this mail and pass
    if (loginMail.value === 'admin' && loginPassword.value === 'admin') {
        window.location.href = 'bank/index.html'
    };
});
