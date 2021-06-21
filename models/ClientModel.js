const APIFactory = require('./APIFactory');

class ClientModel extends APIFactory{
    
    constructor() {
        const fieldNames = ['firstname', 'lastname', 'enterpriseId'];
        super('client', fieldNames);
    }

}

module.exports = ClientModel;