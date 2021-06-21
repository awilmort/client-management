const APIFactory = require('./APIFactory');

class AddressModel extends APIFactory{
    
    constructor() {
        const fieldNames = ['clientId', 'street', 'locality', 'city', 'country'];
        super('address', fieldNames);
    }

}

module.exports = AddressModel;