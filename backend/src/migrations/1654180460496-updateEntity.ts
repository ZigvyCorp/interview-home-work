import {MigrationInterface, QueryRunner} from "typeorm";

export class updateEntity1654180460496 implements MigrationInterface {
    name = 'updateEntity1654180460496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ADD "removed" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Comments" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Posts" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "create_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "create_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Posts" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "Comments" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "removed"`);
    }

}
