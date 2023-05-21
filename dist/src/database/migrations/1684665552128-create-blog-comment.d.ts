import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateBlogComment1684665552128 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
