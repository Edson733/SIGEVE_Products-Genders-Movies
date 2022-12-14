const {query} = require("../../../utils/mysql");

const findAll = async () => {
    const sql = `SELECT * FROM users;`;
    return await query(sql, []);
};

const findEnable = async () => {
    const sql = `SELECT * FROM users WHERE status_usr = 1;`;
    return await query(sql, []);
};

const findById = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `SELECT * FROM users WHERE id_usr = ?;`;
    return await query(sql, [id]);
};

const save = async (users) => {
    if (!users.name_usr || !users.email_usr || !users.password_usr || !users.status_usr || !users.role_usr || !users.saldo_usr) throw Error('Missing fields');
    const sql = `INSERT INTO users(name_usr, email_usr, password_usr, status_usr, role_usr, saldo_usr) VALUES(?, ?, ?, ?, ?, ?);`;
    const {insertedId} = await query(sql, [users.name_usr, users.email_usr, users.password_usr, users.status_usr, users.role_usr, users.saldo_usr]);
    return {...users, id: insertedId};
};

const update = async (users) => {
    if (!users.name_usr || !users.email_usr || !users.password_usr || !users.status_usr || !users.role_usr || !users.saldo_usr || !users.id_usr) throw Error('Missing fields');
    const sql = `UPDATE users SET name_usr = ?, email_usr = ?, password_usr = ?, status_usr = ?, role_usr = ?, saldo_usr = ? WHERE id_usr = ?;`;
    return await query(sql, [users.name_usr, users.email_usr, users.password_usr, users.status_usr, users.role_usr, users.saldo_usr, users.id_usr]);
};

const disable = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `UPDATE users SET status_usr = 0 WHERE id_usr = ?;`;
    return await query(sql, [id]);
};

const enable = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `UPDATE users SET status_usr = 1 WHERE id_usr = ?;`;
    return await query(sql, [id]);
};

module.exports = {
    findAll, findEnable, findById, save, update, disable, enable,
};