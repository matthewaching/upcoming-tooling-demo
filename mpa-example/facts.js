const fetchDailyCatFact = async () => {
  const res = await fetch(
    "https://cat-fact.herokuapp.com/facts/5a4aab322c99ee00219e11c5"
  );
  const body = await res.json();
  const card = document.querySelector(".card");
  card.textContent = body.text;
};

window.addEventListener("load", fetchDailyCatFact);
