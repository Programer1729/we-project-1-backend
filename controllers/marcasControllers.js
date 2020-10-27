const { getSingleCategory } = require("../models/categoria");
const Marca = require("../models/marca");

module.exports = {
  //Obtener todas las categorias
  async getMarcas(req, res, next) {
    try {
      const { rows } = await Marca.get();
      res.status(200).json({
        data: {
          marcas: rows,
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
