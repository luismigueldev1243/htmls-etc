const usd = document.getElementById("priceusd");
const btn = document.getElementById("background-item");
const hdr1 = document.getElementById("xxx1");
const hdr2 = document.getElementById("xxx2");
const hdr3 = document.getElementById("xxx3");

const icon = document.getElementById("iconfa");
const itm = document.querySelector(".item");

let isgray = true;
fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    let cotusd = data.USDBRL.bid;

    usd.innerHTML = cotusd.substring(0, 4);
  })
  .catch((error) => console.error("Erro:", error));
btn.addEventListener("click", () => {
  isgray = !isgray;
  if (isgray) {
    document.body.style.backgroundColor = "gray";
    hdr1.style.color = "white";
    hdr2.style.color = "white";
    hdr3.style.color = "white";
    itm.style.backgroundColor = "white";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    icon.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "black";
    hdr1.style.color = "rgb(89, 86, 86)";
    hdr2.style.color = "rgb(89, 86, 86)";
    hdr3.style.color = "rgb(89, 86, 86)";
  }
});
