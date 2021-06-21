const express = require('express');
const EnterpriseService = require('../services/EnterpriseService');

const EnterpriseRouter = express.Router();
const enterpriseService = new EnterpriseService();

EnterpriseRouter.get('/', async (req, res, next) => {
    try {
        const enterpriseList = await enterpriseService.getAll();
        res.status(200).json(enterpriseList);
    } catch(err) {
        return next(err);
    }
});

EnterpriseRouter.get('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const enterpriseList = await enterpriseService.getById(id);
        res.status(200).json(enterpriseList);
    } catch(err) {
        return next(err);
    }
});

module.exports = EnterpriseRouter;