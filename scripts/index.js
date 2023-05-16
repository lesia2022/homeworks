'use strict';
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const nickname = formData.get('nickname');
    const password = formData.get('password');
    const option = formData.get('option');
    const message = formData.get('message');
    const file = formData.get('file');
    const terms = formData.get('terms');

    const data = {
        email,
        firstName,
        lastName,
        nickname,
        password,
        option,
        message,
        file,
        terms
    };
    console.log(data);
});