const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const { rows } = await Usuario.getByEmail(email);
      const usuario = rows[0];

      if (!usuario)
        return res.status(400).json({ msg: "No hay usuario con ese correo" });

      console.log(usuario);

      const isMatch = await bcrypt.compare(password, usuario.password);

      if (!isMatch) return res.status(400).json({ msg: "Invalid Password" });

      const token = jwt.sign({ id: usuario.id_user }, process.env.JWT_SECRET);

      res.json({
        token,
        usuario: {
          id: usuario.id_user,
          username: usuario.username,
          email: usuario.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
