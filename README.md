# node-1.1-express

EXPRESS QUICK START
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


НЮАНСЫ ЗАПРОСОВ
app.post("/t?est", (req, res) => {
    res.send("TEST it is okay")
})
Означает, что "t" в запросе может быть, а может и не быть

app.post("/t+est", (req, res) => {
    res.send("TEST it is okay")
})
Означает, что "t" в запросе может быть один и более

app.post("/t*est", (req, res) => {
    res.send("TEST it is okay")
})
Означает, что вместо "t" в запросе могут находиться любые символы в любом количестве