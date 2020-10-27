const db = require('../db'); 

const Marca = {}; 

Marca.get = () => {
    return db.query("SELECT * FROM marca");
} 

Marca.getSingleMarca = (id) => {
    return db.query("SELECT * FROM categoria WHERE id_marca = $1", [id]);
}

module.exports = Marca;