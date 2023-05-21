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
exports.BlogEntity = void 0;
const type_orm_base_entity_entity_1 = require("../../../commons/abstract-entity/type-orm-base-entity.entity");
const comment_entity_1 = require("../../comment/entities/comment.entity");
const typeorm_1 = require("typeorm");
let BlogEntity = class BlogEntity extends type_orm_base_entity_entity_1.TypeOrmBaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BlogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BlogEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { default: [] }),
    __metadata("design:type", Array)
], BlogEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.CommentEntity, (comment) => comment.blog),
    __metadata("design:type", Array)
], BlogEntity.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'likeCount', default: 0 }),
    __metadata("design:type", Number)
], BlogEntity.prototype, "likeCount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dislikeCount', default: 0 }),
    __metadata("design:type", Number)
], BlogEntity.prototype, "dislikeCount", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BlogEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BlogEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.VersionColumn)(),
    __metadata("design:type", Number)
], BlogEntity.prototype, "version", void 0);
BlogEntity = __decorate([
    (0, typeorm_1.Entity)('Blog')
], BlogEntity);
exports.BlogEntity = BlogEntity;
//# sourceMappingURL=blog.entity.js.map