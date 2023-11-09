"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async create(doc) {
        const createdEntity = new this.model(doc);
        return await createdEntity.save();
    }
    async findById(id, option) {
        return this.model.findById(id, option);
    }
    async getByCondition(filter, field, option, path, select, model, match) {
        return this.model
            .find(filter, field, option)
            .populate(path, select, model, match);
    }
    async findAll() {
        return this.model.find();
    }
    async aggregate(options) {
        return this.model.aggregate(options);
    }
    async populate(result, options) {
        return await this.model.populate(result, options);
    }
    async deleteOne(id) {
        return this.model.deleteOne({ _id: id });
    }
    async deleteMany(id) {
        return this.model.deleteMany({ _id: { $in: id } });
    }
    async deleteByCondition(filter) {
        return this.model.deleteMany(filter);
    }
    async findByConditionAndUpdate(filter, update) {
        return this.model.findOneAndUpdate(filter, update);
    }
    async updateMany(filter, update, option) {
        return this.model.updateMany(filter, update, option);
    }
    async findByIdAndUpdate(id, update) {
        return this.model.findByIdAndUpdate(id, update);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map