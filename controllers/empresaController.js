const { update } = require("../models/empresa");
const Empresa = require("../models/empresa");

module.exports = {
  //Obtener todas las categorias
  async get(req, res, next) {
    try {
      const { rows } = await Empresa.get();
      res.status(200).json({
        data: {
          empresa: rows[0],
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async update(req, res, next) {
    try {
      const {
        name,
        quienesSomos,
        email,
        direccion,
        telefono,
        facebook,
        twitter,
        instagram,
      } = req.body;
      const { rowCount } = await Empresa.update(
        name,
        quienesSomos,
        email,
        direccion,
        telefono,
        facebook,
        twitter,
        instagram
      );
      res.status(200).json({
        data: {
          empresa: rowCount,
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
