function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Получаем сохраненные данные
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    // Проверяем введенные данные с сохраненными
    if (loginEmail === savedEmail && loginPassword === savedPassword) {
      // Если данные верны, переходим на страницу после регистрации
      window.location.href = 'profile.html';
    } else if (!loginEmail || !loginPassword) {
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
    //   alert('Invalid email or password.');
    }
}