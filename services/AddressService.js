const AddressModel = require('../models/AddressModel');
const ServiceFactory = require('./ServiceFactory');

class AddressService extends ServiceFactory{

    constructor() {
        super(new AddressModel());
    }

}

module.exports = AddressService;