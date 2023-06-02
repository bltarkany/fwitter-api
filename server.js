// import express
const express = require("express");
// import database connection
const db = require("./config/connection");
// importing routes
const routes = require("./routes");

// port & app as express()
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes connection
app.use(routes);

// connect to database
db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server now listening on http://localhost:${PORT}`)
  );
});
