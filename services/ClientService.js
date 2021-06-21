const ClientModel = require('../models/ClientModel');
const ServiceFactory = require('./ServiceFactory');

class ClientService extends ServiceFactory{

    constructor() {
        super(new ClientModel());
    }

}

module.exports = ClientService;