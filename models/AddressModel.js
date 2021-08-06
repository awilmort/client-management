const APIFactory = require('./APIFactory');

class AddressModel extends APIFactory{
    
    constructor() {
        const fieldNames = ['clientId', 'street', 'locality', 'city', 'country'];
        const relationships = [
            {name: 'client', type: 'parent', fields: [{fieldName: 'firstName', label: 'clientName'}, {fieldName: 'lastname', label: 'clientLastname'}], joinField: 'clientId'}
        ];
        super('address', fieldNames, relationships);
    }

}

module.exports = AddressModel;