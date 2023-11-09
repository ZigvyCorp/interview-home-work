import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1699509070139 implements MigrationInterface {
    name = 'Migration1699509070139'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "post" integer`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "owner" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "user" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "dob" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "post" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "post" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "tags" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" ADD "owner" integer`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "UQ_e40ddcdb654dd4ac6e4d1447078" UNIQUE ("owner")`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_fe7c88f05000b53bfef97a88382" FOREIGN KEY ("post") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_d407753bf03609403a31e8ffbb4" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_e40ddcdb654dd4ac6e4d1447078" FOREIGN KEY ("owner") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_e40ddcdb654dd4ac6e4d1447078"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_d407753bf03609403a31e8ffbb4"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_fe7c88f05000b53bfef97a88382"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "UQ_e40ddcdb654dd4ac6e4d1447078"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "tags"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dob"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "owner"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "post"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "id"`);
    }

}
