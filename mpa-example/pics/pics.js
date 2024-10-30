const contentContainer = document.querySelector(".contentContainer");
const slot = document.querySelector(".letterSlot");
const buttons = document.querySelectorAll(".letterButton");

const swapLetter = async (event) => {
  const image = document.querySelector(".catImage");
  const letter = event.currentTarget.id;
  slot.textContent = letter;

  const res = await fetch("https://ssr-sandbox.mching.dev/api/catpicture", {
    method: "POST",
    body: JSON.stringify({ letterInput: letter }),
  });

  if (res.ok) {
    const body = await res.json();

    if (body.catUrl) {
      if (image) {
        image.src = body.catUrl;
      } else {
        const imageContainer = document.createElement("div");
        imageContainer.className = "imageContainer";

        const newImage = document.createElement("img");
        newImage.src = body.catUrl;
        newImage.alt = "this is cat";
        newImage.className = "catImage";

        imageContainer.appendChild(newImage);

        const catHeader = contentContainer.querySelector("h1");

        contentContainer.insertBefore(imageContainer, catHeader);
      }
    } else if (image) {
      const imageContainer = contentContainer.querySelector(".imageContainer");
      document.removeChild(imageContainer);
    }
  }
};

buttons.forEach((button) => button.addEventListener("click", swapLetter));
