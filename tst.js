let btc = document.getElementById("pricebtc");
let eur = document.getElementById("priceeur");
let usd = document.getElementById("priceusd");

fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    let cotusd = data.USDBRL.bid;
    let cotbit = data.BTCBRL.bid;
    let coteur = data.EURBRL.bid;

    btc.innerHTML = cotbit;
    eur.innerHTML = coteur;
    usd.innerHTML = cotusd;
  })
  .catch((error) => console.error("Erro:", error));
