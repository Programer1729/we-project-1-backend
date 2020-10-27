const { getSingleCategory } = require("../models/categoria");
const Categoria = require("../models/categoria");

module.exports = {
  //Obtener todas las categorias
  async getCategorias(req, res, next) {
    try {
      const { rows } = await Categoria.get();
      res.status(200).json({
        data: {
          categorias: rows,
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async getSingleCategory(req, res, next) {
    const { id } = req.params;

    try {
      const { rows } = await Categoria.getSingleCategory(id);
      res.status(200).json({
        data: {
          categorias: rows[0],
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
