import { IMongoDbServices } from "./core/abstract/data-services/data-mongodb-service.abstract";
export declare class AppController {
    private readonly db;
    constructor(db: IMongoDbServices);
    getHello(): Promise<void>;
}
