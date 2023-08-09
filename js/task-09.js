


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const textColorName = document.querySelector('.color')

changeColorBtn.addEventListener('click', changeColor);
function changeColor (_eve) {
  const hexColor = getRandomHexColor();
  const color = getRandomHexColor();
  body.style.background = hexColor;
  textColorName.textContent = color;
};


