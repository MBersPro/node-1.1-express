const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

app.use('/test', (req, res, next) => {
  console.log("ok");
  next();
});

app.use(express.static(path.join(__dirname + '/public')))

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/t*est", (req, res) => {
    res.send("TEST it is okay")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
