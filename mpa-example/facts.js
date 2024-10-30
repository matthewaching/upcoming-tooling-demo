const fetchDailyCatFact = async () => {
    const res = await fetch("https://ssr-sandbox.mching.dev/api/dailyfact");
    const body = await res.json();

    const contentContainer = document.querySelector('.contentContainer');
    const loadingSpinner = contentContainer.querySelector('.loadingSpinner');

    const catFact = document.createElement("div");
    catFact.textContent = body.dailyFact;
    catFact.className = 'catFact';

    contentContainer.removeChild(loadingSpinner);
    contentContainer.appendChild(catFact);
};

window.addEventListener("load", fetchDailyCatFact);
