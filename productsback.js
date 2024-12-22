import { products } from "./products.js";

const createbtn = document.getElementById("create");
const coluna = document.querySelector(".collum");

createbtn.addEventListener("click", () => {
  const prod = document.createElement("div");
  const prod2 = document.createElement("div");
  const price = document.createElement("div");
  const code = document.createElement("div");
  const btndel = document.createElement("button");
  prod.id = "prod";
  prod2.id = "prod2";
  prod2.contentEditable = "true";
  price.id = "price";
  code.id = "code";
  btndel.className = "btndel";
  btndel.textContent = "X";
  prod.append(prod2);
  prod.append(price);
  prod.append(code);
  prod.append(btndel);

  coluna.append(prod);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btndel")) {
    event.target.parentNode.remove();
  }
});

for (const pd in products) {
  const prod = document.createElement("div");
  const prod2 = document.createElement("div");
  const price = document.createElement("div");
  const code = document.createElement("div");
  const btndel = document.createElement("button");
  prod.id = "prod";
  prod2.id = "prod2";
  prod2.textContent = pd;
  price.id = "price";
  code.id = "code";
  btndel.className = "btndel";
  btndel.textContent = "X";
  prod.append(prod2);
  prod.append(price);
  prod.append(code);
  prod.append(btndel);

  coluna.append(prod);

  const productName = prod2.textContent.trim();
  if (products[productName]) {
    price.textContent = `Preço: R$ ${products[productName].preco.toFixed(2)}`;
    code.textContent = `Código: ${products[productName].codigo}`;
  } else {
    price.textContent = "Preço: inexistente";
    code.textContent = "Código: inexistente";
  }

  console.log(products[productName]);
}
