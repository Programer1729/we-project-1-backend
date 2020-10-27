const db = require("../db");

const Producto = {};

Producto.get = () => {
  const statement =
    "SELECT p.id_producto, p.referencia,p.nombre, p.descripcion_corta, p.detalle, p.valor, p.palabras_clave, m.nombre as marca, c.descripcion as categoria, p.image_url FROM producto p  INNER JOIN marca m ON p.id_marca = m.id_marca  INNER JOIN categoria c ON p.id_categoria = c.id_categoria";
  return db.query(statement);
};

Producto.getSingleProducto = (id) => {
  const statement =
    "SELECT p.id_producto, p.referencia,p.nombre, p.descripcion_corta, p.detalle, p.valor, p.palabras_clave, p.image_url, m.nombre as marca, c.descripcion as categoria FROM producto p  INNER JOIN marca m ON p.id_marca = m.id_marca  INNER JOIN categoria c ON p.id_categoria = c.id_categoria WHERE p.id_producto = $1";
  return db.query(statement, [id]);
};

Producto.crearProducto = (
  referencia,
  nombre,
  descripcion,
  detalle,
  valor,
  palabrasClave,
  estado,
  categoria,
  marca,
  imageUrl
) => {
  const statement =
    "INSERT INTO producto (referencia,nombre, descripcion_corta, detalle, valor, palabras_clave, estado, id_categoria, id_marca, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
  return db.query(statement, [
    referencia,
    nombre,
    descripcion,
    detalle,
    valor,
    palabrasClave,
    estado,
    categoria,
    marca,
    imageUrl,
  ]);
};

Producto.getProductosByCategory = (idCategoria) => {
  const statement = "SELECT * FROM producto WHERE id_categoria = $1";
  return db.query(statement, [idCategoria]);
};

module.exports = Producto;
