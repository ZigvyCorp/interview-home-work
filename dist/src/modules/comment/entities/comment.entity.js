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
exports.CommentEntity = void 0;
const blog_entity_1 = require("../../blog/entities/blog.entity");
const typeorm_1 = require("typeorm");
let CommentEntity = class CommentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CommentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommentEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CommentEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => blog_entity_1.BlogEntity, (blog) => blog.comments),
    __metadata("design:type", blog_entity_1.BlogEntity)
], CommentEntity.prototype, "blog", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'likeCount', default: 0 }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dislikeCount', default: 0 }),
    __metadata("design:type", Number)
], CommentEntity.prototype, "dislikeCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "version", void 0);
CommentEntity = __decorate([
    (0, typeorm_1.Entity)('Comment')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map