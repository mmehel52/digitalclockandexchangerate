function getTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let day = now.getDay();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  second < 10 && (second = `0${second}`);
  minute < 10 && (minute = `0${minute}`);
  hour < 10 && (hour = `0${hour}`);
  document.getElementById("date").innerText = `${day}.${month}.${year}`;
  document.getElementById("hour").innerText = `${hour}:${minute}:${second}`;
}

setInterval(() => {
  getTime();
}, 1000);

// ****************exchange******************************

const api = "https://api.exchangerate.host/latest?base=TRY";

function getData(api) {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.rates);

      const TRY = data.rates.TRY;
      const USD = TRY / data.rates.USD;
      const EUR = TRY / data.rates.EUR;
      const GBP = TRY / data.rates.GBP;
      setData(USD, EUR, GBP);
    })
    .catch((err) => console.warn(err));
}
function setData(USD, EUR, GBP) {
  const dollar = document.getElementById("dollar");
  const euro = document.getElementById("euro");
  const sterlin = document.getElementById("sterlin");

  dollar.textContent = USD.toFixed(2);
  euro.textContent = EUR.toFixed(2);
  sterlin.textContent = GBP.toFixed(2);
}

setInterval(() => {
  getData(api);
}, 30000);
getData(api);
