const {query} = require("../../../utils/mysql");

const findAll = async () => {
    const sql = `SELECT * FROM clients;`;
    return await query(sql, []);
};

const findEnable = async () => {
    const sql = `SELECT * FROM clients WHERE status_cet = 1;`;
    return await query(sql, []);
};

const findById = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `SELECT * FROM clients WHERE id_cet = ?;`;
    return await query(sql, [id]);
};

const save = async (clients) => {
    if (!clients.name_cet || !clients.email_cet || !clients.password_cet || !clients.status_cet) throw Error('Missing fields');
    const sql = `INSERT INTO clients(name_cet, email_cet, password_cet, status_cet) VALUES(?, ?, ?, ?);`;
    const {insertedId} = await query(sql, [clients.name_cet, clients.email_cet, clients.password_cet, clients.status_cet]);
    return {...clients, id: insertedId};
};

const update = async (clients) => {
    if (!clients.name_cet || !clients.email_cet || !clients.password_cet || !clients.status_cet || !clients.id_cet) throw Error('Missing fields');
    const sql = `UPDATE clients SET name_cet = ?, email_cet = ?, password_cet = ?, status_cet = ? WHERE id_cet = ?;`;
    return await query(sql, [clients.name_cet, clients.email_cet, clients.password_cet, clients.status_cet, clients.id_cet]);
};

const disable = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `UPDATE clients SET status_cet = 0 WHERE id_cet = ?;`;
    return await query(sql, [id]);
};

const enable = async (id) => {
    if (Number.isNaN(id)) throw Error('Wrong type');
    if (!id) throw Error('Missing fields');
    const sql = `UPDATE clients SET status_cet = 1 WHERE id_cet = ?;`;
    return await query(sql, [id]);
};

module.exports = {
    findAll, findEnable, findById, save, update, disable, enable,
};