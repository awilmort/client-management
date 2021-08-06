const pool = require('../dbconn');

class APIFactory {

    constructor(tableName, fieldNames, relationships) {
        this.tableName = tableName;
        this.fieldNames = fieldNames;
        this.relationships = relationships;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            const query = this.relationships ? this.getJOINQuery() : 'SELECT * FROM ' + this.tableName;
            pool.query(query, (err, results) => {
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

    getJOINQuery() {
        const tablePrefix = this.tableName.substring(0,1);
        let query = 'SELECT ' + tablePrefix + '.id, ';

        this.fieldNames.forEach((field, index) => {
            query += tablePrefix + '.' + field;
            if (index !== this.fieldNames.length - 1) {
                query += ', ';
            }
        });

        this.relationships.forEach(r => {
            const relPrefix = r.name.substring(0,2);
            r.fields.forEach(field => {
                query += ', ' + relPrefix + '.' + field.fieldName + ' ' + field.label;
            });
        });

        query += ' FROM ' + this.tableName + ' ' + tablePrefix;

        this.relationships.forEach(r => {
            const relPrefix = r.name.substring(0,2);
            query += ' LEFT JOIN ' + r.name + ' ' + relPrefix + ' ON ' + tablePrefix + '.' + r.joinField + ' = ' + relPrefix + '.id;';
        });

        return query;
    }

}

module.exports = APIFactory;