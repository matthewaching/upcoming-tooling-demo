const image = document.querySelector(".catDisplay");
const slot = document.querySelector(".letterSlot");
const buttons = document.querySelectorAll(".letterButton");

const swapLetter = async (event) => {
  const selectedLetter = event.target.textContent;
  slot.textContent = selectedLetter;

  const res = await fetch("https://ssr-sandbox.mching.dev/api/catpicture", {
    method: "POST",
    body: JSON.stringify({ letterInput: selectedLetter }),
  });
  const imageUrl = await res.json().body;
  image.src = imageUrl;
};

buttons.forEach((button) => button.addEventListener("click", swapLetter));
