const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from index");
});
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

const mongoDB =
  "mongodb+srv://test:Password@project1.7jz7y.mongodb.net/node_app?retryWrites=true&w=majority";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("ready to use"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MogoDB connection error"));
