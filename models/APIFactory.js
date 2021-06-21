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
            pool.query('SELECT * FROM ' + this.tableName + ' WHERE id = $1', [id], (err, results) => {
                if (err) return reject(err);
                resolve(results.rows);
            });
        });
    }

    create(record) {
        return new Promise((resolve, reject) => {
            const insertClause = this.getInsertClause();
            const valuesToInsert = this.getValuesToAdd(record);
            pool.query(insertClause, valuesToInsert, (err, results) => {
                if (err) return reject(err);
                resolve(results.insertId);
            });
        });
    }

    update(record) {
        return new Promise((resolve, reject) => {
            const updateClause = this.getUpdateClause();
            const valuesToUpdate = this.getValuesToAdd(record);
            valuesToUpdate.push(record.id);
            pool.query(updateClause, valuesToUpdate, (err, results) => {
                if (err) return reject(err);
                resolve(record.id);
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            pool.query('DELETE FROM ' + this.tableName + ' WHERE id = $1', [id], (err, results) => {
                if (err) return reject(err);
                resolve(id);
            });
        });
    }

    getInsertClause() {
        let fieldsToInsert = ' (';
        let valueNumbers = '(';
        this.fieldNames.forEach((field, index) => {
            fieldsToInsert += field;
            valueNumbers += '$' + (index+1);
        });
        fieldsToInsert += ') ';
        valueNumbers += ') ';

        let insertClause = 'INSERT INTO ' + this.tableName + fieldsToInsert + ' VALUES ' + valueNumbers;
        return insertClause;
    }

    getUpdateClause() {
        let updateClause = 'UPDATE ' + this.tableName + ' SET ';
        this.fieldNames.forEach((field, index) => {
            updateClause += field + ' = $' (index+1);
            if (index !== this.fieldNames.length - 1) {
                updateClause+= ', ';
            }
        });

        updateClause += ' WHERE id = $' + this.fieldNames.length + 1;
        return updateClause;
    }

    getValuesToAdd(record) {
        let valuesToAdd = [];
        this.fieldNames.forEach(field => {
            valuesToAdd.push(record[field]);
        });
        return valuesToAdd;
    }

}

module.exports = APIFactory;