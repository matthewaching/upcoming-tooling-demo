const fetchDailyCatFact = async () => {
  const res = await fetch("http://localhost:3000/api/dailyfact");
  const body = await res.json();
  const card = document.querySelector(".card");
  card.textContent = body.dailyFact;
};

window.addEventListener("load", fetchDailyCatFact);
