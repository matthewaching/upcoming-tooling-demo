const image = document.querySelector(".catDisplay");
const slot = document.querySelector(".letterSlot");
const buttons = document.querySelectorAll(".letterButton");

const swapLetter = async (event) => {
  const selectedLetter = event.target.id;
  slot.textContent = selectedLetter;

  const res = await fetch("http://localhost:3000/api/catpicture", {
    method: "POST",
    body: JSON.stringify({ letterInput: selectedLetter }),
  });

  const body = await res.json();
  const imageUrl = body.catUrl;
  image.src = imageUrl;
};

buttons.forEach((button) => button.addEventListener("click", swapLetter));
