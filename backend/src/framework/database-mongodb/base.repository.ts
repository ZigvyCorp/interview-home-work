import {
  Model,
  FilterQuery,
  QueryOptions,
  Document,
  ProjectionFields,
  PipelineStage,
  UpdateQuery,
  PopulateOptions,
} from 'mongoose';

export class BaseRepository<T extends Document> {
  constructor(readonly model: Model<T>) {}

  async create(doc): Promise<any> {
    const createdEntity = new this.model(doc);
    return await createdEntity.save();
  }

  async findById(id: string, option?: QueryOptions): Promise<T> {
    return this.model.findById(id, option);
  }

  async getByCondition(
    filter: FilterQuery<T>,
    field?: ProjectionFields<T> | null,
    option?: QueryOptions<T> | null,
    path?: string | string[],
    select?: string | any,
    model?: string,
    match?: any,
  ): Promise<T[]> {
    return this.model
      .find(filter, field, option)
      .populate(path, select, model, match);
  }

  async findAll(): Promise<T[]> {
    return this.model.find();
  }

  async aggregate(options: PipelineStage[]) {
    return this.model.aggregate(options);
  }

  async populate(
    result: T[],
    options: PopulateOptions | Array<PopulateOptions> | string,
  ) {
    return await this.model.populate(result, options);
  }

  async deleteOne(id: string) {
    return this.model.deleteOne({ _id: id } as FilterQuery<T>);
  }

  async deleteMany(id: string[]) {
    return this.model.deleteMany({ _id: { $in: id } } as FilterQuery<T>);
  }

  async deleteByCondition(filter: FilterQuery<T>) {
    return this.model.deleteMany(filter);
  }

  async findByConditionAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateQuery<T>,
  ) {
    return this.model.findOneAndUpdate(filter, update);
  }

  async updateMany(
    filter: FilterQuery<T>,
    update: UpdateQuery<T>,
    option?: QueryOptions<T> | null,
  ) {
    return this.model.updateMany(filter, update, option);
  }

  async findByIdAndUpdate(id, update: UpdateQuery<T>) {
    return this.model.findByIdAndUpdate(id, update);
  }
}
