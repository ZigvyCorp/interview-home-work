"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbServices = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("./base.repository");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MongoDbServices = class MongoDbServices {
    constructor(user, post, comment) {
        this.user = user;
        this.post = post;
        this.comment = comment;
        this.userRepo = new base_repository_1.BaseRepository(this.user);
        this.postRepo = new base_repository_1.BaseRepository(this.post);
        this.commentRepo = new base_repository_1.BaseRepository(this.comment);
    }
};
exports.MongoDbServices = MongoDbServices;
exports.MongoDbServices = MongoDbServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __param(1, (0, mongoose_1.InjectModel)('posts')),
    __param(2, (0, mongoose_1.InjectModel)('comments')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], MongoDbServices);
//# sourceMappingURL=mongodb-dataservices.js.map