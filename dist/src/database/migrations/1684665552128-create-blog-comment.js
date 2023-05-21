"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBlogComment1684665552128 = void 0;
class CreateBlogComment1684665552128 {
    constructor() {
        this.name = 'CreateBlogComment1684665552128';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "Comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying NOT NULL, "author" character varying NOT NULL, "likeCount" integer NOT NULL DEFAULT '0', "dislikeCount" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "blogId" uuid, CONSTRAINT "PK_fe8d6bf0fcb531dfa75f3fd5bdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Blog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "version" integer NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "author" character varying NOT NULL, "images" json NOT NULL DEFAULT '[]', "likeCount" integer NOT NULL DEFAULT '0', "dislikeCount" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_17b41207a933e2060f824e073fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Comment" ADD CONSTRAINT "FK_b8fdcb368bf96ebb4bd78f6529f" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "Comment" DROP CONSTRAINT "FK_b8fdcb368bf96ebb4bd78f6529f"`);
        await queryRunner.query(`DROP TABLE "Blog"`);
        await queryRunner.query(`DROP TABLE "Comment"`);
    }
}
exports.CreateBlogComment1684665552128 = CreateBlogComment1684665552128;
//# sourceMappingURL=1684665552128-create-blog-comment.js.map