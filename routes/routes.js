const express = require("express");
const router = express.Router();
const { index, create, update, destroy } = require("../controllers/users");

router.get("/api/users", index);

router.post("/api/users", create);

router.patch("/api/users", update);

router.delete("/api/users", destroy);

module.exports = router;
