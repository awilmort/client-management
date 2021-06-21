const EnterpriseModel = require('../models/EnterpriseModel');

class EnterpriseService {

    constructor() {
        this.enterpriseModel = new EnterpriseModel();
    }

    async getAll() {
        const enterpriseList = await this.enterpriseModel.getAll();
        return enterpriseList;
    }

    async getById(id) {
        const enterpriseList = await this.enterpriseModel.getById(id);
        return enterpriseList;
    }

}

module.exports = EnterpriseService;