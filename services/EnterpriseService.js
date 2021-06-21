const EnterpriseModel = require('../models/EnterpriseModel');
const ServiceFactory = require('./ServiceFactory');

class EnterpriseService extends ServiceFactory{

    constructor() {
        super(new EnterpriseModel());
    }

}

module.exports = EnterpriseService;