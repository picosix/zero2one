// Nodeplusplus.com
// src/index.js

const express = require("express");

const usersRouter = require("./routes");

const app = express();
const port = 3000;

// Thay thế cho app.use("/", (req, res) => res.send("Hello World!"))
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users/", usersRouter);

app.listen(port, () =>
  console.log(`Server running at http://127.0.0.1:${port}/`)
);
