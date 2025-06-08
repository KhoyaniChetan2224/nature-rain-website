const express = require("express");
const router = express.Router();
const { createCrop } = require("../controllers/crop.controller");

router.post("/farminfo", createCrop);

module.exports = router;
