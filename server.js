const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const PORT = process.env.PORT || 3000;

// assests
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

//set template engine
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
