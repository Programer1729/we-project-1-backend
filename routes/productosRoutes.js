const express = require("express");
const productosControllers = require("../controllers/productosControllers");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/", productosControllers.getProductos);

router.get("/:id", productosControllers.getSingleProducto);

router.get(
  "/categorias/:idCategoria",
  productosControllers.getProductosByCategory
);

router.post("/", auth, productosControllers.crearProducto);

module.exports = router;
