const pool = require('../dbconn');

class APIFactory {

    constructor(tableName, fieldNames) {
        this.tableName = tableName;
        this.fieldNames = fieldNames;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM ' + this.tableName, (err, results) => {
                if (err) return reject(err);
                resolve(results.rows);
            });
        });
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM ' + this.tableName + ' WHERE id =$1', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results.rows);
            });
        });
    }

    create(record) {
        return new Promise((resolve, reject) => {
            const insertClause = this.getInsertClause();
            const valuesToInsert = this.getValuesToInsert(record)
            pool.query(insertClause, valuesToInsert, (err, results) => {
                if (err) return reject(err);
                resolve(results.rows);
            });
        });
    }

    update(record) {
        return new Promise((resolve, reject) => {
            const insertClause = this.getInsertClause();
            const valuesToInsert = this.getValuesToInsert(record)
            pool.query(insertClause, valuesToInsert, (err, results) => {
                if (err) return reject(err);
                resolve(results.rows);
            });
        });
    }

    getInsertClause() {
        let fieldsToInsert = ' (';
        let valueNumbers = '(';
        this.fieldNames.forEach((field, index) => {
            fieldsToInsert += field;
            valueNumbers += (index+1);
        });
        fieldsToInsert += ') ';
        valueNumbers += ') ';

        let insertClause = 'INSERT INTO ' + this.tableName + fieldsToInsert + ' VALUES ' + valueNumbers;
        return insertClause;
    }

    getValuesToInsert(record) {
        let valuesToInsert = [];
        this.fieldNames.forEach(field => {
            valuesToInsert.push(record[field]);
        });
        return valuesToInsert;
    }

}

module.exports = APIFactory;