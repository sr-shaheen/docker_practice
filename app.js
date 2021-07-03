"use strict";

const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();

const mongoose = require("mongoose");
const DATABASE = "mongodb://mymongo:27017/testup";

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Error in DB Connection");
  });

app.get("/", (req, res) => {
  res.send("You are visiting root route");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
