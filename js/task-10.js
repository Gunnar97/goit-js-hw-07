const refs = {
  controlsContainer: document.querySelector("#controls"),
  inputNum: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector('#boxes')
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);
let size = 30;

function createBoxes() {
  const amount = refs.inputNum.value;
  const arr = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.background = getRandomHexColor();
    box.style.border = '2px solid red';

    size += 10;
    arr.push(box);
    
  }
  refs.boxesContainer.append(...arr);
  console.log(refs.boxesContainer);
}


function destroyBoxes(){
  refs.inputNum.value = '';
  refs.boxesContainer.innerHTML = '';
  size = 30;
}
