import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUser1698980805747 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: "bigint",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    { name: 'name', type: 'varchar', isNullable: false, length: '255' },
                    { name: 'username', type: 'varchar', isNullable: false, length: '255' },
                    { name: 'password', type: 'varchar', isNullable: false, length: '1024' },
                    { name: 'dob', type: 'varchar', isNullable: false, length: '20' },
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
