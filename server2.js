const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname)));

app.get("/xxx", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor web rodando em http://localhost:${PORT}`);
});
