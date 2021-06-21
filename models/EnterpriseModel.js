const pool = require('../dbconn');
const APIFactory = require('./APIFactory');

class EnterpriseModel extends APIFactory{
    
    constructor() {
        const fieldNames = ['name', 'description'];
        super('enterprise', fieldNames);
    }

}

module.exports = EnterpriseModel;