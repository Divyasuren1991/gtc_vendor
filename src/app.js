require("dotenv/config");
const express = require('express');

const hbs = require("hbs");
const path = require("path");
const port = process.env.PORT;
const morgan = require("morgan");

const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");//registration
const partialPath = path.join(__dirname, "../templates/partials");

const app = express();

app.set("view engine", "hbs");
app.set("views", viewPath);

app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialPath);

app.use(morgan ("tiny"));

app.get('/', function (req, res) {
  res.render("login");
})

app.listen(port, function(){
    console.log("server is up on port",port);
});
