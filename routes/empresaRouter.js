const express = require("express");
const empresaController = require("../controllers/empresaController");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", empresaController.get);

router.put("/", auth, empresaController.update);

module.exports = router;
