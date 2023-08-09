const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
}

refs.nameInput.addEventListener('input', addName);

function addName(eve) {
    if (refs.nameInput.value != '') {
        return (refs.nameOutput.textContent = refs.nameInput.value);
    }
    
    return (refs.nameOutput.textContent = 'Anonymous')

    
}
