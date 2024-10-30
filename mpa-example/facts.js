const fetchDailyCatFact = async () => {
  const res = await fetch("https://ssr-sandbox.mching.dev/api/dailyfact");
  const body = await res.json();
  const card = document.querySelector(".card");
  card.textContent = body.dailyFact;
};

window.addEventListener("load", fetchDailyCatFact);
