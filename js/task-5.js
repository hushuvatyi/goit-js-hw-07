function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const onBtnClick = event => {
  const newBodyBackGroundColor = getRandomHexColor();
  spanEl.textContent = newBodyBackGroundColor;
  bodyEl.style.backgroundColor = newBodyBackGroundColor;

}

btn.addEventListener('click', onBtnClick);