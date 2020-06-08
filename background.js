const body = document.querySelector("body");

const IMAGE_NUMBER = 41;

function setBackground(img) {
  const image = new Image();
  image.src = `Images/img${img + 1}.jpg`;
  image.classList.add("background");
  body.appendChild(image);
}

function generateRandom(range) {
  const number = Math.floor(Math.random() * range);
  return number;
}

function init() {
  const random = generateRandom(IMAGE_NUMBER);
  setBackground(random);
}

init();