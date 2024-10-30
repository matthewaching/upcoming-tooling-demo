const contentContainer = document.querySelector(".contentContainer");
const headerContainer = document.querySelector(".headerContainer");
const slot = document.querySelector(".letterSlot");
const buttons = document.querySelectorAll(".letterButton");

const swapLetter = async (event) => {
    const letter = event.currentTarget.id;
    slot.textContent = letter;

    const existingLoadingSpinner = document.querySelector('loadingSpinner');

    if (!existingLoadingSpinner) {
        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'loadingSpinner';
        contentContainer.insertAdjacentElement('afterbegin', loadingSpinner);
    }

    const res = await fetch("https://ssr-sandbox.mching.dev/api/catpicture", {
        method: "POST",
        body: JSON.stringify({ letterInput: letter }),
    });

    const body = await res.json();

    const loadingSpinnerToRemove = document.querySelector('loadingSpinner');
    contentContainer.removeChild(loadingSpinnerToRemove);

    const image = document.querySelector(".catImage");

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
            contentContainer.insertAdjacentElement('afterbegin', imageContainer);
        }
    } else if (image) {
        const imageContainer = contentContainer.querySelector(".imageContainer");
        contentContainer.removeChild(imageContainer);
    }

    const existingSubtitle = document.querySelector(".imageSubtitle");
    let subtitleString = '';

    if (letter === 'f') {
        subtitleString = "that's not very nice";
    } else if (letter === 'l') {
        subtitleString = 'the gainz';
    } else if (letter === 'gy') {
        subtitleString = "sheeeeesh";
    } else if (letter === 'x') {
        subtitleString = "that doesn't look right...";
    }

    if (existingSubtitle) {
        if (subtitleString) {
            existingSubtitle.textContent = subtitleString;
        } else {
            headerContainer.removeChild(existingSubtitle);
        }
    } else if (subtitleString) {
        const newSubtitle = document.createElement('p');
        newSubtitle.className = 'imageSubtitle';
        newSubtitle.textContent = subtitleString;

        const catHeader = headerContainer.querySelector("h1");
        catHeader.insertAdjacentElement('afterend', newSubtitle);
    }
};

buttons.forEach((button) => button.addEventListener("click", swapLetter));
