const getEur = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const URL = `https://api.frankfurter.app/latest?from=EUR`;
  const KS_URL = `http://localhost:8000/api/eur`;

  const res = await fetch(URL);
  const data = await res.json();

  const newCur = {
    value: data.rates.THB,
    pair: data.base,
  };

  console.log("eur", newCur);

  await fetch(KS_URL, {
    method: "POST",
    body: JSON.stringify(newCur),
    headers: myHeaders,
  });
};

module.exports = getEur;
