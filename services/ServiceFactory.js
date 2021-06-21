
class ServiceFactory {

    constructor(model) {
        this.model = model;
    }

    async getAll() {
        const records = await this.model.getAll();
        return records;
    }

    async getById(id) {
        const records = await this.model.getById(id);
        return records[0];
    }

    async create(record) {
        const recordId = await this.model.create(record);
        return recordId;
    }

    async update(record) {
        const recordId = await this.model.update(record);
        return recordId;
    }

    async remove(id) {
        const recordId = await this.model.remove(id);
        return recordId;
    }

}

module.exports = ServiceFactory;