const h1 = document.getElementById("x");
const h2 = document.getElementById("y");
fetch("http://localhost:3000/")
  .then((res) => res.json())
  .then((data) => {
    h1.textContent = data.mensagen;
    h2.textContent = data.id;
  });
