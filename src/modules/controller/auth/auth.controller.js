const { Respose, Router } = require('express');
const { validateError } = require('../../../utils/functions');
const { login } = require('./auth.gateway');

const signin = async (req, res = Respose) => {
    try {
        console.log(req.body);
        const { email_usr, password_usr } = req.body;
        const token = await login(email_usr, password_usr);
        console.log(token);
        res.status(200).json(token);
    } catch (error) {
        console.log(error);
        const message = validateError(error);
        res.status(400).json({ message });
    }
};

const authRouter = Router();
authRouter.post(`/`, signin);

module.exports = {
    authRouter,
};