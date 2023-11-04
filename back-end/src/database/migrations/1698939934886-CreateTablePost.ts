import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTablePost1698939934886 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'post',
                columns: [
                    {
                        name: 'id',
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    { name: 'title', type: 'varchar', isNullable: false, length: '2048' },
                    { name: 'content', type: 'varchar', isNullable: false },
                    { name: 'tags', type: 'jsonb', isNullable: false },
                    { name: 'owner', type: 'bigint', isNullable: false },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'NOW()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'NOW()',
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                        isNullable: true,
                        default: 'null',
                    },
                ],
            }),
            true,
        );
    }

    public async down(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}