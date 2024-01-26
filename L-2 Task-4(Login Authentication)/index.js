const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connection = require("./public/db");
const { register } = require("./public/controller/register");

const app = express();
app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
connection();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", register);

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/public/success.html");
});
app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/public/error.html");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
