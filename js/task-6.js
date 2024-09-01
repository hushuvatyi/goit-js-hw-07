function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlEl = document.querySelector('#controls');
const inputEl = controlEl.querySelector('input');
const createBtnEl = controlEl.querySelector('button[data-create]');
const destroyBtnEl = controlEl.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

const onClickCreate = event => {
  const amount = inputEl.value;
  if (amount < 1 || amount > 100) {
    alert('Amount is out of range. Please, enter a number from 1 to 100!');
    inputEl.value = '';
    inputEl.focus();
    return;
  }
  createBoxes(amount);
  inputEl.value = '';
  inputEl.focus();
};

function createBoxes(amount) {
  destroyBoxes();
  const arrayOfMarkup = [];
  for (let i = 0; i < amount; i++) {
    let size = 30 + 10 * i;
    const item = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
    arrayOfMarkup.push(item);
  }

  boxesContainerEl.insertAdjacentHTML('beforeend', arrayOfMarkup.join(''));
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
  inputEl.value = '';
  inputEl.focus();
}

createBtnEl.addEventListener('click', onClickCreate);
destroyBtnEl.addEventListener('click', destroyBoxes);
