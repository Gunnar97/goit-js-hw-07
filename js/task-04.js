
const counterContainer = document.querySelector('#counter');
const decrementBtn = counterContainer.children[0];
const incrementBtn = counterContainer.children[2];
const valueText = document.querySelector('#value');


let value = 0;


decrementBtn.addEventListener('click', decrement);
function decrement(event) {
    value -= 1;
    return(valueText.textContent = value);
}

incrementBtn.addEventListener('click', increment);
function increment(event) {
    value += 1;
    return (valueText.textContent = value);
}
