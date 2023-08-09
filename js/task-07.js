const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(eve) {
    text.style.fontSize = eve.target.value + 'px';
}
