const express = require("express");
const app = express();
const path = require("path");
const banki = require("./banki");

//displays the html and related files to the user
app.use(express.static(path.join(__dirname, "public")));

//This is just a link to access the banki api for the user
app.get("/api/banki", (req, res) => {
  res.json(banki);
});

//Gets name of category entered by user and sends back an array of json objects with questions that only has that category to the getRandom function on main.js
app.get("/api/banki/category/:id", (req, res) => {
  res.send(banki.filter((x) => x.category == req.params.id));
});

//Gets specific question number entered by user and sends back the json object with that index to the getQuestion function on main.js
app.get("/api/banki/question/:id", (req, res) => {
  res.send(banki[req.params.id]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
