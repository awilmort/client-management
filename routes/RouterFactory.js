
class RouterFactory {
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
    }

    async getAll(req, res, next) {
        try {
            const records = await this.service.getAll();
            res.status(200).json(records);
        } catch(err) {
            return next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const id = Number(req.params.id);
            const record = await this.service.getById(id);
            res.status(200).json(record);
        } catch(err) {
            return next(err);
        }
    }

    async create(req, res, next) {
        try {
            const recordId = await this.service.create(req.body);
            res.status(200).json({recordId});
        } catch(err) {
            return next(err);
        }
    }

    async update(req, res, next) {
        try {
            const id = Number(req.params.id);
            req.body.id = id;
            const recordId = await this.service.update(req.body);
            res.status(200).json({recordId});
        } catch(err) {
            return next(err);
        }
    }

    async remove(req, res, next) {
        try {
            const id = Number(req.params.id);
            const recordId = await this.service.remove(id);
            res.status(200).json({recordId});
        } catch(err) {
            return next(err);
        }
    }
    
}

module.exports = RouterFactory;