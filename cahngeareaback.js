import { products } from "./products.js";
const coluna = document.querySelector(".coluna");

setInterval(() => {
  console.log(products.Manteiga.preco);
}, 1000);

for (const pdcts in products) {
  const prow = document.createElement("div");
  const name = document.createElement("p");
  const price = document.createElement("p");
  prow.id = "prow";
  name.textContent = "Nome: " + pdcts;
  price.textContent = "preço: " + products[pdcts].preco;
  price.contentEditable = "true";
  products[pdcts].preco = price.textContent;
  prow.append(name);
  prow.append(price);
  coluna.append(prow);
  price.addEventListener("input", () => {
    products[pdcts].preco = price.textContent;
  });
}
