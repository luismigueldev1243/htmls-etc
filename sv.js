import { dtbase } from "./public/database";
const express = require("express");
const UUID = require("node:crypto");
const app = express();
const dtbs = new dtbase();

// Middleware para servir arquivos estáticos e analisar JSON
app.use(express.static("public"));
app.use(express.json()); // Middleware para análise de JSON

app.post("/save", (req, res) => {
  const name = req.body.name; // Acesso ao corpo da requisição
  if (name) {
    dtbs.funpost(name, UUID.randomUUID());
    res.send("Name saved successfully");
  } else {
    res.status(400).send("Bad Request: 'name' is required");
  }
});

app.get("/busc", (req, res) => {
  const id = req.query.id;
  if (id) {
    const result = dtbs.funget(id);
    if (result) {
      res.send(result);
    } else {
      res.send("id not found");
    }
  } else {
    res.status(400).send("Bad Request: 'id' is required");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
