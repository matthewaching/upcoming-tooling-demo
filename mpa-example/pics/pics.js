const image = document.querySelector(".catDisplay");
const slot = document.querySelector(".letterSlot");
const buttons = document.querySelectorAll(".letterButton");

const swapLetter = (event) => {
  slot.textContent = event.target.textContent;
  image.src = "https://i.redd.it/trvw9nduhx261.jpg";
};

buttons.forEach((button) => button.addEventListener("click", swapLetter));
