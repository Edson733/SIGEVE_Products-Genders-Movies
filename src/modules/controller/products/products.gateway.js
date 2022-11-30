const {query} = require("../../../utils/mysql");

const findAll = async () => {
    const sql = `SELECT * FROM products;`;
    return await query(sql, []);
};

const findById = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `SELECT * FROM products WHERE id_product = ?;`;
    return await query(sql, [id]);
};

const save = async (product) => {
    if (!product.name || !product.price) throw Error('Missing fields');
    const sql = `INSERT INTO products(name, price) VALUES(?, ?);`;
    const {insertedId} = await query(sql, [product.name, product.price]);
    return {...product, id: insertedId};
};

const update = async (product) => {
    if (!product.name || !product.price || !product.id_product) throw Error('Missing fields');
    const sql = `UPDATE products set name = ?, price = ? WHERE id_product = ?;`;
    return await query(sql, [product.name, product.price, product.id_product]);
};

const remove = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `DELETE FROM products WHERE id_product = ?;`;
    return await query(sql, [id]);
};

module.exports = {
    findAll, findById, save, update, remove,
};