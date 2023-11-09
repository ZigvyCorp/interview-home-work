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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSevice = void 0;
const common_1 = require("@nestjs/common");
const data_mongodb_service_abstract_1 = require("../../core/abstract/data-services/data-mongodb-service.abstract");
let CommentSevice = class CommentSevice {
    constructor(db) {
        this.db = db;
    }
    async getComments() {
        return await this.db.commentRepo.findAll();
    }
    async getCommentByPostId(postId) {
        return await this.db.commentRepo.getByCondition({ postId });
    }
};
exports.CommentSevice = CommentSevice;
exports.CommentSevice = CommentSevice = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_mongodb_service_abstract_1.IMongoDbServices])
], CommentSevice);
//# sourceMappingURL=comment.service.js.map