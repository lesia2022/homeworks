(function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const firstName = document.querySelector('input[name="firstName"]').value;
        const lastName = document.querySelector('input[name="lastName"]').value;
        const nickname = document.querySelector('input[name="nickname"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const option = document.querySelector('select[name="option"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
        const file = document.querySelector('input[name="file"]').value;
        const terms = document.querySelector('input[name="terms"]').checked;

        const userData = {
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

        const userDataJSON = JSON.stringify(userData);

        localStorage.setItem("userData", userDataJSON);

        form.reset();
        window.location.href = 'outputForm.html';
    });
})();

