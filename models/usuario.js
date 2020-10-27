const db = require("../db");

const Usuario = {};

Usuario.get = () => {
  return db.query("SELECT * FROM usuario");
};

Usuario.getByEmail = (email) => {
  return db.query("SELECT* FROM usuario WHERE email = $1", [email]);
};

Usuario.getById = (id) => {
  return db.query("SELECT * FROM usuario WHERE id_user = $1", [id]);
};

module.exports = Usuario;
