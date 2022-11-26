const {Response, Router} = require("express");
const {findAll, findById, save, update, remove} = require("./products.gateway");
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
        const {name, price} = req.body;
        const results = await save({name, price});
        res.status(400).json({results});
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const modific = async (req, res = Response) => {
    try{
        const {id_product, name, price} = req.body;
        const results = await update({id_product, name, price});
        res.status(400).json({results});
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const suprim = async (req, res = Response) => {
    try{
        const {id} = req.params;
        const results = await remove(id);
        res.status(200).json(results);
    }catch (err) {
        console.log(err);
        const message = validateError(err);
        res.status(400).json({message});
    }
};

const productRouter = Router();
productRouter.get(`/all`, [], getAll);
productRouter.get(`/:id`, [], getById);
productRouter.post(`/save`, [], insert);
productRouter.put(`/update`, [], modific);
productRouter.delete(`:id`, [], suprim);

module.exports = {
    productRouter
};