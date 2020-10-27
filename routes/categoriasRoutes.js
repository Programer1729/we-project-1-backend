const express = require("express"); 
const categoriasControllers = require('../controllers/categoriasControllers');
const router = express.Router(); 

router.get("/", categoriasControllers.getCategorias); 

router.get("/:id", categoriasControllers.getSingleCategory);

module.exports = router;