"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_provider_1 = require("./database.provider");
const mongoose_1 = require("@nestjs/mongoose");
const data_mongodb_service_abstract_1 = require("../../core/abstract/data-services/data-mongodb-service.abstract");
const user_schema_1 = require("../../core/schema/user.schema");
const post_schema_1 = require("../../core/schema/post.schema");
const comment_schema_1 = require("../../core/schema/comment.schema");
const mongodb_dataservices_1 = require("./mongodb-dataservices");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'users',
                    schema: user_schema_1.UserSchema,
                },
                {
                    name: 'posts',
                    schema: post_schema_1.PostSchema,
                },
                {
                    name: 'comments',
                    schema: comment_schema_1.CommentSchema,
                },
            ]),
        ],
        providers: [
            ...database_provider_1.databaseProviders,
            {
                provide: data_mongodb_service_abstract_1.IMongoDbServices,
                useClass: mongodb_dataservices_1.MongoDbServices,
            },
        ],
        exports: [...database_provider_1.databaseProviders, data_mongodb_service_abstract_1.IMongoDbServices],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map