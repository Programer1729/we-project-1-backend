const db = require("../db");

const Empresa = {};

Empresa.get = () => {
  return db.query("SELECT * FROM empresa");
};

Empresa.update = (
  nombre,
  quienesSomos,
  email,
  direccion,
  telefono,
  facebook,
  twitter,
  instagram
) => {
  return db.query(
    "UPDATE empresa SET nombre=$1, quienes_somos=$2, email_contacto=$3, direccion=$4, telefono_contacto=$5, facebook=$6, twitter=$7, instagram=$8 WHERE id_empresa=1",
    [
      nombre,
      quienesSomos,
      email,
      direccion,
      telefono,
      facebook,
      twitter,
      instagram,
    ]
  );
};

module.exports = Empresa;
