const express = require("express");
const marcasControllers = require("../controllers/marcasControllers");
const router = express.Router();

router.get("/", marcasControllers.getMarcas);

module.exports = router;
