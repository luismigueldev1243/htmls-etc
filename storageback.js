import { products } from "./products.js";

products.Manteiga.preco = 0;

const coluna = document.querySelector(".coluna");
document.addEventListener("DOMContentLoaded", () => {
  for (const productName in products) {
    const product = products[productName];

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const pcol = document.createElement("div");

    pcol.id = "pcol";
    pcol.append(p1);
    pcol.append(p2);

    p1.textContent = `Produto: ${productName}`;
    p2.textContent = `Quantidade: ${product.quantidade}`;

    coluna.append(pcol);
  }
});
console.log(products.Manteiga.preco);
