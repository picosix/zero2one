// Nodeplusplus.com
// src/routes.js

const express = require("express");

const router = express.Router();
router.post("/local/register", (req, res) => res.send("GET /local/register"));
router.put("/local/update", (req, res) => res.send("PUT /local/update"));
router.post("/local/reset-password", (req, res) =>
  res.send("POST /local/reset-password")
);
router.get("/local/:token", (req, res) => res.send("GET /local/:token"));
router.post("/local/login", (req, res) => res.send("POST /local/login"));
router.post("/local/password-recovery", (req, res) =>
  res.send("POST /local/password-recovery")
);
router.get("GET /local/password-recovery/:token", (req, res) =>
  res.send("/local/password-recovery/:token")
);
router.put("PUT /local/password-recovery/:token", (req, res) =>
  res.send("/local/password-recovery/:token")
);

module.exports = router;
