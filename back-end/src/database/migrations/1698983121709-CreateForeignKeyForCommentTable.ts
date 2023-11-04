import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateForeignKeyForCommentTable1698983121709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const ownerForeignKey = new TableForeignKey({
            columnNames: ['post'],
            referencedTableName: 'post',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
        });
        await queryRunner.createForeignKey('comment', ownerForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
