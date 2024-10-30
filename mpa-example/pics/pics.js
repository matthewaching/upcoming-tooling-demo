const image = document.querySelector(".catDisplay");
const slot = document.querySelector(".letterSlot");
const buttons = document.querySelectorAll(".letterButton");

const swapLetter = async (event) => {
  const letter = event.currentTarget.id;
  slot.textContent = letter;

  const res = await fetch("https://ssr-sandbox.mching.dev/api/catpicture", {
    method: "POST",
    body: JSON.stringify({ letterInput: letter }),
  });

  const body = await res.json();
  image.src = body.catUrl;
};

buttons.forEach((button) => button.addEventListener("click", swapLetter));
