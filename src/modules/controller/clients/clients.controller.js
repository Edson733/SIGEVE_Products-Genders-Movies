const {Response, Router} = require("express");
const {findAll, findEnable, findById, save, update, disable, enable} = require("./clients.gateway");
const {validateError} = require("../../../utils/functions");

const getAll = async (req, res = Response) => {
    try{
        const results = await findAll();
        res.status(200).json(results);
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const getEnable = async (req, res = Response) => {
    try{
        const results = await findEnable();
        res.status(200).json(results);
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const getById = async (req, res = Response) => {
    try{
        const {id} = req.params;
        const results = await findById(id);
        res.status(200).json(results);
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const insert = async (req, res = Response) => {
    try{
        const {name_cet, email_cet, password_cet, status_cet} = req.body;
        const results = await save({name_cet, email_cet, password_cet, status_cet});
        res.status(200).json({results});
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const modific = async (req, res = Response) => {
    try{
        const {name_cet, email_cet, password_cet, status_cet, id_cet} = req.body;
        const results = await update({name_cet, email_cet, password_cet, status_cet, id_cet});
        res.status(200).json({results});
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const disa = async (req, res = Response) => {
    try{
        const {id} = req.params;
        const results = await disable(id);
        res.status(200).json(results);
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const ena = async (req, res = Response) => {
    try{
        const {id} = req.params;
        const results = await enable(id);
        res.status(200).json(results);
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const clientRouter = Router();
clientRouter.get(`/all`, [], getAll);
clientRouter.get(`/all/enable`, [], getEnable);
clientRouter.get(`/:id`, [], getById);
clientRouter.post(`/save`, [], insert);
clientRouter.put(`/update`, [], modific);
clientRouter.put(`/disable/:id`, [], disa);
clientRouter.put(`/enable/:id`, [], ena);

module.exports = {
    clientRouter,
};