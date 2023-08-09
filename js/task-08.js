const form = document.querySelector('.login-form');

form.addEventListener('submit', checkForm);

function checkForm(eve) {
    eve.preventDefault();

    const { email, password } = eve.currentTarget.elements;
    
    if (email.value === '' || password.value === '') {
        return (alert('Both fields must be filled!'));
    };

    const data = {
        email: email.value,
        password: password.value
    };

    console.log(data);
    eve.target.reset();
}
