const APIFactory = require('./APIFactory');

class ClientModel extends APIFactory {
    
    constructor() {
        const fieldNames = ['firstname', 'lastname', 'enterpriseId'];
        const relationships = [
            //{name: 'address', type: 'child', fields: ['clientId', 'street', 'locality', 'city', 'country'] },
            {name: 'enterprise', type: 'parent', fields: [{fieldName: 'name', label: 'enterprise'}], joinField: 'enterpriseId'}
        ];
        super('client', fieldNames, relationships);
    }

}

module.exports = ClientModel;