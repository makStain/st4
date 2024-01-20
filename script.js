function register() {
    let email = document.getElementById("validationCustomUsername").value;
    let password = document.getElementById("validationCustom01").value;
    let fullName = document.getElementById("validationCustom02").value;
    let country = document.getElementById("validationCustom03").value;
    let birthday = document.getElementById("validationCustom04").value;

    if (!email || !password || !fullName || !country || !birthday) {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
            'use strict'

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                const submitButton = form.querySelector('button[type="submit"]');
                form.addEventListener('click', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
                }, false)
            })
        })()
    } else {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password); // Добавлено сохранение пароля
        localStorage.setItem('userName', fullName);
        localStorage.setItem('userFullName', fullName);
        localStorage.setItem('userFname', fullName);
        localStorage.setItem('userCountry', country);
        localStorage.setItem('userBirthday', birthday);

        // Переходим на страницу после регистрации
        window.location.href = 'profile.html';
    }
    
}