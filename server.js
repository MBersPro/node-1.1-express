const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/t+est", (req, res) => {
    res.send("TEST it is okay")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
