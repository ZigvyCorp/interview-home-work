/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model, FilterQuery, QueryOptions, Document, ProjectionFields, PipelineStage, UpdateQuery, PopulateOptions } from 'mongoose';
export declare class BaseRepository<T extends Document> {
    readonly model: Model<T>;
    constructor(model: Model<T>);
    create(doc: any): Promise<any>;
    findById(id: string, option?: QueryOptions): Promise<T>;
    getByCondition(filter: FilterQuery<T>, field?: ProjectionFields<T> | null, option?: QueryOptions<T> | null, path?: string | string[], select?: string | any, model?: string, match?: any): Promise<T[]>;
    findAll(): Promise<T[]>;
    aggregate(options: PipelineStage[]): Promise<any[]>;
    populate(result: T[], options: PopulateOptions | Array<PopulateOptions> | string): Promise<import("mongoose").IfAny<T, any, Document<unknown, {}, T> & import("mongoose").Require_id<T>>[]>;
    deleteOne(id: string): Promise<import("mongodb").DeleteResult>;
    deleteMany(id: string[]): Promise<import("mongodb").DeleteResult>;
    deleteByCondition(filter: FilterQuery<T>): Promise<import("mongodb").DeleteResult>;
    findByConditionAndUpdate(filter: FilterQuery<T>, update: UpdateQuery<T>): Promise<import("mongoose").IfAny<T, any, Document<unknown, {}, T> & import("mongoose").Require_id<T>>>;
    updateMany(filter: FilterQuery<T>, update: UpdateQuery<T>, option?: QueryOptions<T> | null): Promise<import("mongoose").UpdateWriteOpResult>;
    findByIdAndUpdate(id: any, update: UpdateQuery<T>): Promise<import("mongoose").IfAny<T, any, Document<unknown, {}, T> & import("mongoose").Require_id<T>>>;
}
