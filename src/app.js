require("dotenv/config");
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require("morgan");

app.use(morgan ("tiny"));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, function(){
    console.log("server is up on port",port);
});
