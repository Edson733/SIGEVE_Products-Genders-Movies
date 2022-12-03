const {query} = require("../../../utils/mysql");

const findAll = async () => {
    const sql = `SELECT * FROM genders;`;
    return await query(sql, []);
};

const findEnable = async () => {
  const sql = `SELECT * FROM genders WHERE status = 1;`;
  return await query(sql, []);
};

const findById = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `SELECT * FROM genders WHERE id_gdr = ?;`;
    return await query(sql, [id]);
};

const save = async (gender) => {
    if (!gender.id_gdr || !gender.name_gdr || !gender.status) throw Error('Missing fields');
    const sql = `INSERT INTO genders (id_gdr, name_gdr, status) VALUES(?, ?, ?);`;
    const {insertedId} = await query(sql, [gender.id_gdr, gender.name_gdr, gender.status]);
    return {...gender, id: insertedId};
};

const update = async (gender) => {
    if (!gender.name_gdr || !gender.status || !gender.id_gdr) throw Error('Missing fields');
    const sql = `UPDATE genders SET name_gdr = ?, status = ? WHERE id_gdr = ?;`;
    return await query(sql, [gender.name_gdr, gender.status, gender.id_gdr]);
};

const disable = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `UPDATE genders SET status = 0 WHERE id_gdr = ?;`;
    return await query(sql, [id]);
};

const enable = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `UPDATE genders SET status = 1 WHERE id_gdr = ?;`;
    return await query(sql, [id]);
};

module.exports = {
  findAll, findEnable, findById, save, update, disable, enable,
};