const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hey it works</h1>");
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
