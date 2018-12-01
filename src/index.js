// Nodeplusplus.com
// src/index.js

const express = require("express");

const usersRouter = require("./routes");
const models = require("./mongoose");

const app = express();
app.set("port", 3000); // <- Cấu hình

app.set("models", models); // <-- Đổi tên biến từ mongoose thành models

// Thay thế cho app.use("/", (req, res) => res.send("Hello World!"))
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/users/", usersRouter);

app.listen(app.get("port"), () =>
  // <- Gọi lại biến đã cấu hình
  console.log(`Server running at http://127.0.0.1:${app.get("port")}/`)
);
