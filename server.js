const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 4001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

const app = express();

// heroku run -a appname printenv to view data
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${PORT}!`);
});