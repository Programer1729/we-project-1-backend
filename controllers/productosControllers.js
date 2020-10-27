const Producto = require("../models/producto");

module.exports = {
  //Obtener todas las categorias
  async getProductos(req, res, next) {
    try {
      const { rows } = await Producto.get();
      res.status(200).json({
        data: {
          productos: rows,
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getSingleProducto(req, res, next) {
    const { id } = req.params;

    try {
      const { rows } = await Producto.getSingleProducto(id);
      res.status(200).json({
        data: {
          productos: rows[0],
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async crearProducto(req, res, next) {
    const {
      referencia,
      nombre,
      descripcionCorta,
      detalle,
      valor,
      palabrasClave,
      estado,
      categoria,
      marca,
      imageUrl,
    } = req.body;

    try {
      const { rows } = await Producto.crearProducto(
        referencia,
        nombre,
        descripcionCorta,
        detalle,
        valor,
        palabrasClave,
        estado,
        categoria,
        marca,
        imageUrl
      );
      res.status(201).json({
        data: {
          producto: rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getProductosByCategory(req, res, next) {
    const { idCategoria } = req.params;
    try {
      const { rows } = await Producto.getProductosByCategory(idCategoria);
      res.status(200).json({
        data: {
          productos: rows,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
