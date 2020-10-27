const db = require('../db'); 

const Categoria = {}; 

Categoria.get = () => {
    return db.query("SELECT * FROM categoria");
} 

Categoria.getSingleCategory = (id) => {
    return db.query("SELECT * FROM categoria WHERE id_categoria = $1", [id]);
}

module.exports = Categoria;