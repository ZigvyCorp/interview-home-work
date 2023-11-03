import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableComment1698980697810 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comment',
                columns: [
                    {
                        name: 'id',
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    { name: 'owner', type: 'bigint', isNullable: false },
                    { name: 'post', type: 'bigint', isNullable: false },
                    { name: 'content', type: 'varchar', isNullable: false, length: '100000' },
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
