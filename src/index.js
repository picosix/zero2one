// Nodeplusplus.com
// src/index.js

const express = require("express");
const mongoose = require("mongoose");

const usersRouter = require("./routes");

const app = express();
app.set("port", 3000); // <- Cấu hình

const mongoURL = "mongodb://localhost:27017/zero2one";
mongoose.connect(
  mongoURL,
  { useNewUrlParser: true }
);
app.set("mongoose", mongoose);

// Thay thế cho app.use("/", (req, res) => res.send("Hello World!"))
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users/", usersRouter);

app.listen(app.get("port"), () =>
  // <- Gọi lại biến đã cấu hình
  console.log(`Server running at http://127.0.0.1:${app.get("port")}/`)
);
