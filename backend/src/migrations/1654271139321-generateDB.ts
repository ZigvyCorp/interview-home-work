import {MigrationInterface, QueryRunner} from "typeorm";

export class generateDB1654271139321 implements MigrationInterface {
    name = 'generateDB1654271139321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" SERIAL NOT NULL, "username" character varying(20) NOT NULL, "password" character varying(60) NOT NULL, "name" character varying(40) NOT NULL, "dob" date NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "removed" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Posts" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "removed" boolean NOT NULL DEFAULT false, "tags" character varying array NOT NULL, CONSTRAINT "PK_0f050d6d1112b2d07545b43f945" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Comments" ("id" integer NOT NULL, "content" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "removed" boolean NOT NULL DEFAULT false, "ownerId" integer, "postId" integer, CONSTRAINT "PK_91e576c94d7d4f888c471fb43de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Posts" ADD CONSTRAINT "FK_0f050d6d1112b2d07545b43f945" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_3d833b7063e8046120f1cb9a7a3" FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_68844d71da70caf0f0f4b0ed72d" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_68844d71da70caf0f0f4b0ed72d"`);
        await queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_3d833b7063e8046120f1cb9a7a3"`);
        await queryRunner.query(`ALTER TABLE "Posts" DROP CONSTRAINT "FK_0f050d6d1112b2d07545b43f945"`);
        await queryRunner.query(`DROP TABLE "Comments"`);
        await queryRunner.query(`DROP TABLE "Posts"`);
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
