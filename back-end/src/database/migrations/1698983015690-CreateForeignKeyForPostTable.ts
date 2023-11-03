import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class CreateForeignKeyForPostTable1698983015690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const ownerForeignKey = new TableForeignKey({
            columnNames: ['owner'],
            referencedTableName: 'user',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
        });
        await queryRunner.createForeignKey('post', ownerForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
