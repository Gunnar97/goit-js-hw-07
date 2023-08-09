const input = document.querySelector('#validation-input');

input.addEventListener('blur', chackInput);

function chackInput(eve) {
    if (eve.target.value.trim().length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}

