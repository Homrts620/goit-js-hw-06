function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const colorSpan = document. querySelector('.color');
const colorButton = document.querySelector('.change-color');

colorButton.addEventListener('click', () => {
let changeColor = getRandomHexColor();
colorSpan.innerHTML = changeColor;
document.body.style.backgroundColor = changeColor;
});