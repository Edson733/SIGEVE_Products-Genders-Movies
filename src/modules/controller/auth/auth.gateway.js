const { query } = require('../../../utils/mysql');
const { generateToken } = require('../../../config/jwt');

const login = async (email, password) => {
    console.log(email, password);
    if (!email || !password) throw Error('Missing fields');
    const sql = `SELECT * FROM users WHERE email_usr = ? && password_usr = ? && status_usr != 0;`;
    const existsUser = await query(sql, [email, password]);
    if (await !existsUser[0].password) {
        return {
            token: generateToken({
                email: email,
                password: password
            }),
        };
    }
    throw Error('Password mismatch');
};

module.exports = { login };