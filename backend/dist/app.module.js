"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const comment_module_1 = require("./services/comment/comment.module");
const post_module_1 = require("./services/post/post.module");
const user_module_1 = require("./services/user/user.module");
const database_module_1 = require("./framework/database-mongodb/database.module");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            comment_module_1.CommentModule,
            post_module_1.PostModule,
            user_module_1.UserModule,
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forRoot("mongodb+srv://doadmin:rR0J35Z71VWio928@db-mongodb-sgp1-76973-464ced0f.mongo.ondigitalocean.com/C300AMG?tls=true&authSource=admin&replicaSet=db-mongodb-sgp1-76973", {}),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map